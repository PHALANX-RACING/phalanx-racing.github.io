# Phalanx Racing — Website (Astro)

Build-log'lu, markdown tabanlı takım sitesi.

## Çalıştırma
```bash
npm install
npm run dev      # http://localhost:4321
```

## Yeni build-log yazısı ekleme
`src/content/buildlog/` içine yeni bir `.md` dosyası ekle:

```md
---
title: Başlık
date: 2026-09-01
tag: Tasarım
summary: Kısa özet.
---

İçerik markdown olarak...
```


## Yapı
- `src/pages/build-log/index.astro` — yazı listesi
- `src/pages/build-log/[...slug].astro` — tekil yazı sayfası
- `src/content/buildlog/*.md` — yazılar
- `src/layouts/Base.astro` — ortak kabuk (nav + footer + tema)
- `src/styles/global.css` — Phalanx paleti

