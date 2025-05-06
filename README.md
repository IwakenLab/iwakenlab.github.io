# Iwaken Lab. 公式サイト

このリポジトリは、Iwaken Lab.の公式サイトのソースコードです。Docusaurusを使用して構築されています。

## 開発環境のセットアップ

### 必要条件

- Node.js 16.14以上
- npm 7以上

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start
```

## デプロイ

### GitHub Pagesへのデプロイ

```bash
# ビルド
npm run build

# デプロイ
npm run deploy
```

### Vercelへのデプロイ

1. Vercelにリポジトリをインポート
2. ビルド設定は自動で検出されます

## ディレクトリ構成

```
├── docs/              # ドキュメント（Markdown）
├── src/
│   ├── pages/        # カスタムページ
│   ├── components/   # UIコンポーネント
│   └── css/         # スタイルシート
├── docusaurus.config.js  # サイト設定
└── sidebars.js      # サイドバー構成
```

## ライセンス

MIT License 