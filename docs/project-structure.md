# ペイントアプリ - プロジェクト構造

## 完全なファイルシステム構造（隠しファイル含む）

```
paint-app/
│
├── .claude/                    # Claude Code設定ディレクトリ
│   ├── settings.json          # プロジェクト共有設定
│   └── settings.local.json    # ローカル設定（権限など）
│
├── .git/                      # Gitリポジトリデータ
│   ├── config                 # Git設定
│   ├── HEAD                   # 現在のブランチ参照
│   ├── hooks/                 # Gitフック
│   ├── index                  # ステージングエリア
│   ├── logs/                  # Git操作履歴
│   ├── objects/               # Gitオブジェクトデータベース
│   └── refs/                  # ブランチとタグ参照
│
├── docs/                      # GitHub Pages用ビルド出力
│   ├── assets/                # ビルドされたJavaScriptファイル
│   │   └── index-DcrlTvJP.js  # メインバンドル
│   ├── index.html             # エントリーHTML
│   ├── manifest.webmanifest   # PWAマニフェスト
│   ├── registerSW.js          # Service Worker登録
│   ├── release-notes.md       # Claude Codeリリースノート（日本語）
│   ├── sw.js                  # Service Worker
│   └── workbox-5ffe50d4.js    # Workboxライブラリ
│
├── node_modules/              # npmパッケージ（詳細省略）
│   ├── .bin/                  # 実行可能バイナリ
│   ├── .package-lock.json     # パッケージロックファイル
│   ├── .vite/                 # Viteキャッシュ
│   └── [各種パッケージ]
│
├── src/                       # ソースコード
│   ├── components/            # Reactコンポーネント
│   │   └── Canvas.tsx         # 描画キャンバスコンポーネント
│   ├── App.tsx                # メインアプリケーションコンポーネント
│   └── main.tsx               # エントリーポイント
│
├── .gitignore                 # Git除外設定
├── biome.json                 # Biomeリンター/フォーマッター設定
├── CLAUDE.md                  # Claude Code用ガイドライン
├── index.html                 # HTMLテンプレート
├── package-lock.json          # 依存関係の正確なバージョン
├── package.json               # プロジェクト設定と依存関係
├── project-structure.md       # このファイル
├── README.md                  # プロジェクトドキュメント
├── requirements.md            # 要件定義書
├── tsconfig.json              # TypeScript設定
├── tsconfig.node.json         # Node.js用TypeScript設定
└── vite.config.ts             # Viteビルド設定

## 主要ディレクトリの説明

### `.claude/`
- Claude Code専用の設定ファイル
- プロジェクト共有設定とローカル権限設定を分離

### `.git/`
- Gitバージョン管理システムのデータ
- コミット履歴、ブランチ情報、オブジェクトデータベース

### `docs/`
- GitHub Pages用のビルド出力ディレクトリ
- PWA対応のService Workerファイルを含む
- 本番環境で配信されるファイル

### `node_modules/`
- npmでインストールされた依存パッケージ
- `.vite/`にはViteのキャッシュとビルド最適化データ

### `src/`
- TypeScript/Reactのソースコード
- コンポーネントベースの構造

## 設定ファイル

### ビルド・開発環境
- `vite.config.ts`: Viteの設定（PWA、GitHub Pages対応）
- `tsconfig.json`: TypeScriptコンパイラ設定
- `tsconfig.node.json`: Node.js環境用のTypeScript設定

### コード品質
- `biome.json`: コードフォーマットとリント設定
- `.gitignore`: Git追跡除外ファイル

### プロジェクト管理
- `package.json`: プロジェクトメタデータと依存関係
- `package-lock.json`: 依存関係の正確なバージョンロック

### ドキュメント
- `README.md`: プロジェクト概要と使用方法
- `requirements.md`: 機能要件と実装状況
- `CLAUDE.md`: Claude Code用の開発ガイドライン

## 特徴

1. **PWA対応**: Service WorkerとWorkboxによるオフライン対応
2. **GitHub Pages対応**: `/docs`ディレクトリへの出力
3. **モダンなスタック**: React + TypeScript + Vite
4. **コード品質**: Biomeによる統一されたフォーマット
5. **開発効率**: Claude Code用の詳細なガイドライン