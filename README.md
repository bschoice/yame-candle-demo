# Yame Candle Demo

架空のキャンドルアーティスト「Yame Candle / Taka」の練習用デモサイトです。B’s choiceの本番サイトとは別物です。

## 概要

キャンドルアーティスト向けの「小さな公式サイト」制作サービスを想定した、GitHub Pagesで公開できる静的サイトです。

- スマホファーストの1ページ構成
- HTML / CSS / JavaScriptのみで実装
- ハンバーガーメニュー、ページ内リンク、FAQアコーディオンに対応
- 仮画像が未配置でも崩れにくい写真フレームを用意

## ファイル構成

```text
.
├── index.html
├── style.css
├── script.js
├── images/
│   ├── .gitkeep
│   ├── artist01.png
│   ├── yame01.png
│   ├── yame02.png
│   ├── yame03.png
│   ├── yame04.png
│   ├── yame05.png
│   ├── yame06.png
│   ├── yame07.png
│   ├── yame08.png
│   ├── yame9.png
│   └── yame10.png
└── README.md
```

`images` 内の yame 系 PNG ファイルを各セクションの写真として使用します。未配置の場合は、淡いプレースホルダー表示になります。

## ローカル確認

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いて確認できます。
