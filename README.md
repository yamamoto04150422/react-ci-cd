[参考](https://qiita.com/Stellarium/items/095ca74299a50016c321)


実行

``
npm run dev
``

lint実行

``
npm run lint
``

自動整形

``
npx prettier . --write
``

build

``
npx run build
``

テスト

``
npm run test
npx vitest
``

カバレッジ

``
npm run test -- --coverage
npx vitest run --coverage
``

このワークフローは、プッシュやプルリクエストがmasterブランチに対して行われると、以下のステップを実行します。

1. コードをチェックアウトする1.
1. Node.js環境をセットアップする
1. 依存関係をインストールする
1. ESLintを実行する
1. テストを実行し、カバレッジレポートを生成する
1. プロジェクトをビルドする
1. カバレッジレポートをアップロードする
1. ビルド成果物をアップロードする

これにより、コードの品質とビルドプロセスの一貫性を確保

[![CI/CD Pipeline](https://github.com/yamamoto04150422/react-ci-cd/actions/workflows/main.yml/badge.svg)](https://github.com/yamamoto04150422/react-ci-cd/actions/workflows/main.yml)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
