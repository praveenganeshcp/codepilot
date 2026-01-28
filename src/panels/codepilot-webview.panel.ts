import * as vscode from 'vscode';
import { getUri } from '../utilities/get-uri';

export class CodePilotWebViewPanel {
  public static currentPanel: CodePilotWebViewPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);
  }

  public static render(extensionUri: vscode.Uri) {
    if (CodePilotWebViewPanel.currentPanel) {
      CodePilotWebViewPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
    } else {
      const panel = vscode.window.createWebviewPanel(
        'codePilot',
        'CodePilot',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'codepilot-ui/dist/codepilot-ui/browser')],
          retainContextWhenHidden: true
        }
      );
      CodePilotWebViewPanel.currentPanel = new CodePilotWebViewPanel(panel, extensionUri);
    }
  }

  public dispose() {
    CodePilotWebViewPanel.currentPanel = undefined;
    this._panel.dispose();
    while (this._disposables.length) {
      this._disposables.pop()?.dispose();
    }
  }

  private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
    const stylesUri = getUri(webview, extensionUri, ['codepilot-ui/dist/codepilot-ui/browser', 'styles.css']);
    // const runtimeUri = getUri(webview, extensionUri, ['codepilot-ui/dist/codepilot-ui/browser', 'runtime.js']);
    // const polyfillsUri = getUri(webview, extensionUri, ['codepilot-ui/dist/codepilot-ui/browser', 'polyfills.js']);
    const mainUri = getUri(webview, extensionUri, ['codepilot-ui/dist/codepilot-ui/browser', 'main.js']);
    const cspSource = webview.cspSource;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${cspSource} https:; script-src ${cspSource} 'unsafe-eval'; style-src ${cspSource} 'unsafe-inline';">
  <link rel="stylesheet" href="${stylesUri}">
  <title>CodePilot</title>
</head>
<body>
  <app-root></app-root>
  <script src="${mainUri}"></script>
</body></html>`;
  }
}
