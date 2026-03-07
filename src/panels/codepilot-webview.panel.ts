import * as vscode from "vscode";
import { getUri } from "../utilities/get-uri";

export class CodePilotWebViewPanel {
  public static currentPanel: CodePilotWebViewPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  private constructor(
    panel: vscode.WebviewPanel,
    extensionUri: vscode.Uri,
    isDebug: boolean,
  ) {
    this._panel = panel;
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
    this._panel.webview.html = this._getWebviewContent(
      this._panel.webview,
      extensionUri,
      isDebug,
    );
  }

  public static render(extensionUri: vscode.Uri, isDebug: boolean) {
    if (CodePilotWebViewPanel.currentPanel) {
      CodePilotWebViewPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
    } else {
      const panel = vscode.window.createWebviewPanel(
        "codePilot",
        "CodePilot",
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          localResourceRoots: [
            vscode.Uri.joinPath(
              extensionUri,
              "codepilot-ui/dist/codepilot-ui/browser",
            ),
          ],
          retainContextWhenHidden: true,
        },
      );
      CodePilotWebViewPanel.currentPanel = new CodePilotWebViewPanel(
        panel,
        extensionUri,
        isDebug
      );
    }
  }

  public dispose() {
    CodePilotWebViewPanel.currentPanel = undefined;
    this._panel.dispose();
    while (this._disposables.length) {
      this._disposables.pop()?.dispose();
    }
  }

  private _getWebviewContent(
    webview: vscode.Webview,
    extensionUri: vscode.Uri,
    isDebug: boolean,
  ) {
    const cspSource = webview.cspSource;

    if (isDebug) {
      const angularDevServerUrl = "http://localhost:4200";

      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; frame-src ${angularDevServerUrl}; img-src ${cspSource} https: data:; script-src ${cspSource}; style-src ${cspSource} 'unsafe-inline';">
  <title>CodePilot (Debug)</title>
</head>
<body style="margin:0;padding:0;overflow:hidden;">
  <iframe
    id="codepilot-iframe"
    src="${angularDevServerUrl}"
    style="border:0;width:100vw;height:100vh;"
    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
  ></iframe>
</body>
</html>`;
    }

    const stylesUri = getUri(webview, extensionUri, [
      "codepilot-ui/dist/codepilot-ui/browser",
      "styles.css",
    ]);
    const mainUri = getUri(webview, extensionUri, [
      "codepilot-ui/dist/codepilot-ui/browser",
      "main.js",
    ]);

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
