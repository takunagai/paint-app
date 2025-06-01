# ペイントアプリ

モバイルファーストなペイントアプリケーション。PWA対応により、スマートフォンでも快適に絵を描くことができます。

🎨 **デモ**: [https://takunagai.github.io/paint-app/](https://takunagai.github.io/paint-app/)

## 特徴

- 📱 **モバイル最適化** - タッチ操作に最適化されたUI
- 🎨 **鉛筆ツール** - リアルなざらつき感のある描画
- 🎯 **直感的な操作** - シンプルで使いやすいインターフェース
- 📲 **PWA対応** - ホーム画面に追加してアプリとして使用可能
- 🌈 **16色カラーパレット** - 基本的な色を素早く選択
- 📏 **ブラシサイズ調整** - 1〜20pxの範囲で調整可能

## 技術スタック

- **React** 18.2.0 - UIフレームワーク
- **TypeScript** 5.2.2 - 型安全な開発
- **Vite** 5.0.8 - 高速なビルドツール
- **Biome** 1.9.4 - リンター/フォーマッター
- **PWA** - Progressive Web App対応

## 開発

### 必要要件

- Node.js 18以上
- npm 9以上

### セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/takunagai/paint-app.git
cd paint-app

# 依存関係のインストール
npm install
```

### 開発サーバー

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアプリケーションが起動します。

### その他のコマンド

```bash
npm run build      # 本番ビルド
npm run preview    # ビルドのプレビュー
npm run lint       # コード検査
npm run format     # コード整形
npm run lint:fix   # 自動修正
npm run type-check # 型チェック
```

## プロジェクト構造

```text
paint-app/
├── src/
│   ├── main.tsx          # エントリーポイント
│   ├── App.tsx           # メインコンポーネント
│   └── components/
│       └── Canvas.tsx    # 描画キャンバス
├── docs/                 # GitHub Pages用ビルド出力
├── index.html            # HTMLテンプレート
├── vite.config.ts        # Vite設定
├── biome.json            # Biome設定
├── tsconfig.json         # TypeScript設定
└── requirements.md       # 要件定義書
```

## 実装済み機能

- ✅ 鉛筆ツール（ざらつき感のある線）
- ✅ ブラシサイズ調整（1-20px）
- ✅ 16色カラーパレット
- ✅ タッチ操作対応
- ✅ PWA対応

## 今後の予定

1. 消しゴムツール
2. レイヤー機能（背景・前景）
3. アンドゥ・リドゥ機能
4. 作品の保存・読み込み
5. 下部ツールバー配置

詳細は[要件定義書](./requirements.md)を参照してください。

## 貢献

Issue や Pull Request を歓迎します。

## ライセンス

MIT License

## 作者

[@takunagai](https://github.com/takunagai)
