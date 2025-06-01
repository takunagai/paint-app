# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

モバイルファーストのペイントアプリ（PWA）。React + TypeScript + Viteで構築。

## 開発コマンド

```bash
npm run dev        # 開発サーバー起動（http://localhost:3000）
npm run build      # 本番ビルド（型チェック付き）
npm run preview    # ビルドプレビュー
npm run lint       # Biomeでコード検査
npm run format     # Biomeでコード整形
npm run lint:fix   # Biomeで自動修正
npm run type-check # TypeScript型チェックのみ
```

## アーキテクチャ

### コンポーネント構造

- **App.tsx**: アプリケーション全体の状態管理（brushSize, currentColor）
- **Canvas.tsx**: 描画ロジックの実装。タッチ/マウスイベントを処理し、鉛筆ツールの質感を再現

### 状態管理

- React.useStateでローカル状態管理
- props経由でCanvasコンポーネントに状態を伝達

### 描画実装の特徴

- Canvas APIを直接使用
- 鉛筆の質感: ジッター効果とランダムな透明度で実現
- タッチ操作: passive: falseでスムーズな描画を実現

## 技術スタック

- **React 18.2**: UIフレームワーク
- **TypeScript**: 型安全性
- **Vite**: ビルドツール（PWAプラグイン付き）
- **Biome**: リンター/フォーマッター（タブインデント、ダブルクォート）

## 現在の実装状況

### 完了

- 鉛筆ツール（ざらつき感のある線）
- ブラシサイズ調整（1-20px）
- 16色カラーパレット
- タッチ操作対応
- PWA対応

### 未実装（優先順）

1. 消しゴムツール
2. レイヤー機能（背景・前景）
3. アンドゥ・リドゥ機能
4. 作品の保存・読み込み
5. 下部ツールバー配置

## 開発時の注意点

### コード規約

- Biomeのデフォルト設定に従う
- インデント: タブ
- クォート: ダブルクォート
- セミコロン: あり

### Canvas描画の重要ポイント

- `drawPencilStroke`は`brushSize`と`color`に依存
- タッチイベントは`{ passive: false }`で登録（スクロール防止）
- 描画パフォーマンスを考慮し、distance < 1の場合は描画をスキップ

### PWA設定

- `vite.config.ts`でマニフェスト設定済み
- アイコンファイルは未配置（pwa-192x192.png, pwa-512x512.png必要）
