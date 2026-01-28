# CodePilot – Turn Specs into PRs in Minutes

CodePilot is a VS Code extension that helps you turn natural‑language specs into high‑quality pull requests with minimal friction. It provides an in‑editor panel where you can describe what you want, iterate on plans, and let AI generate or edit code for you.

This repository contains:

- `codepilot` – the VS Code extension (this root project)
- `codepilot-ui` – the web UI that powers the CodePilot panel, built with Angular

---

## Features

- **Spec‑to‑PR workflow**: Describe your task in natural language and let CodePilot help plan and implement changes.
- **Integrated panel UI**: A rich webview panel (`CodePilot`) rendered inside VS Code.
- **Agentic workflow**: Uses multi‑step AI agents (via LangChain / LangGraph) for planning and execution.
- **TypeScript‑first**: Extension and UI are written in TypeScript for strong typing and maintainability.

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or a compatible package manager)
- VS Code `^1.105.0`

---

## Development – VS Code Extension

Install dependencies at the repo root:

```bash
npm install
```

### Build

```bash
npm run compile
```

This compiles the TypeScript sources in `src/` to `out/`.

### Watch Mode

```bash
npm run watch
```

Rebuilds the extension automatically on file changes.

### Run the Extension

1. Open this folder in VS Code.
2. Run the **Extension** launch configuration from the Run and Debug view.
3. VS Code will open a new Extension Development Host window.
4. In the command palette, run **CodePilot** (`codepilot.webview`) to open the panel.

### Lint

```bash
npm run lint
```

### Tests

```bash
npm test
```

This uses the VS Code test runner configured in `@vscode/test-cli` / `@vscode/test-electron`.

---

## Development – `codepilot-ui` (Angular)

The `codepilot-ui` folder contains the Angular application used inside the CodePilot webview panel.

From the repo root:

```bash
cd codepilot-ui
npm install
```

### Run Dev Server

```bash
ng serve
```

Open `http://localhost:4200/` in your browser to work on the UI in isolation.

### Build

```bash
ng build
```

Build artifacts will be output to `codepilot-ui/dist/`.

For more Angular‑specific details, see `codepilot-ui/README.md`.

---

## Packaging the Extension

To create a VSIX package:

```bash
npm run vscode:build
```

This runs `vsce package` and generates a `.vsix` file you can install in VS Code or distribute.

---

## Project Structure

- `src/extension.ts` – main extension entry point
- `src/panels/codepilot-webview.panel.ts` – webview panel wiring for the CodePilot UI
- `src/ai-agents/` – agent logic and planning nodes
- `src/utilities/` – shared helpers
- `codepilot-ui/` – Angular UI application for the CodePilot panel

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a GitHub issue or submit a pull request.

Before submitting a PR:

- Ensure linting passes (`npm run lint`).
- Ensure tests pass (`npm test` and any relevant `codepilot-ui` tests).

---

## License

This project is licensed under the terms described in `LICENSE.txt`.