# onurhaktan.com — Mimari Doküman

## Genel Bakış

Kişisel portfolio sitesi. Next.js 15 App Router ile geliştirilmiş, Sanity CMS ile proje içeriği yönetiliyor, Tailwind CSS ile stillendirilmiş.

---

## Proje Yapısı

```
onurhaktan.com/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (metadata, Provider, Navbar, Analytics)
│   ├── page.tsx                  # Ana sayfa (hero, bio, tech stack, projeler)
│   ├── projects/
│   │   └── page.tsx              # Projeler sayfası (Sanity'den veri çeker)
│   ├── components/
│   │   ├── Navbar.tsx            # Üst navigasyon (Headless UI Disclosure)
│   │   ├── Provider.tsx          # next-themes ThemeProvider
│   │   └── Themebutton.tsx       # Dark/Light mode toggle
│   ├── lib/
│   │   └── sanity.ts             # Sanity client konfigürasyonu
│   └── globals.css               # Global stiller, font import
├── sanity/                       # Sanity Studio (ayrı monore)
│   ├── sanity.config.ts          # Studio config (desk, vision)
│   ├── sanity.cli.ts             # CLI config (projectId, dataset)
│   └── schemas/
│       ├── index.ts              # Schema export
│       └── project.tsx           # Project document şeması
├── public/                       # Statik dosyalar
│   ├── me.jpeg                   # Profil fotoğrafı
│   └── vercel.svg
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

---

## Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 3.4 |
| CMS | Sanity v3 |
| Theme | next-themes (dark/light) |
| UI Components | Headless UI |
| Font | IBM Plex Sans (@fontsource) |
| Analytics | Vercel Analytics, Speed Insights |
| Hosting | Vercel |
| Node | 22.x |

---

## Veri Akışı

```
┌─────────────────┐     GROQ      ┌──────────────────┐
│  Sanity Studio  │ ◄──────────►  │  Sanity CDN API  │
│  (localhost:3333)               │  (cdn.sanity.io) │
└─────────────────┘               └────────┬─────────┘
                                           │
                                           │ client.fetch()
                                           ▼
┌─────────────────────────────────────────────────────┐
│  Next.js App (app/projects/page.tsx)                 │
│  - Server Component                                 │
│  - revalidate: 60 (ISR)                             │
│  - GROQ: *[_type == "project"] { title, overview,   │
│          link, _id, imageUrl }                      │
└─────────────────────────────────────────────────────┘
```

---

## Sayfa Mimarisi

```
                    ┌─────────────────────────────────────┐
                    │  app/layout.tsx (Root Layout)       │
                    │  - html, body, Provider             │
                    │  - Navbar, main, Analytics, SpeedInsights │
                    └─────────────────┬───────────────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              │                       │                       │
              ▼                       ▼                       ▼
    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
    │  app/page.tsx   │    │ app/projects/   │    │  (gelecekte)    │
    │  (Ana Sayfa)    │    │ page.tsx        │    │  /blog, vb.     │
    │                 │    │                 │    │                 │
    │  - Hero         │    │  - getProjects()│    │                 │
    │  - Bio          │    │  - Server Comp  │    │                 │
    │  - Tech Stack   │    │  - ISR 60s      │    │                 │
    │  - <Projects/>  │◄───│  (embed)        │    │                 │
    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Not:** `/projects` ayrı bir route olarak tanımlı ancak şu an sadece ana sayfada `<Projects />` olarak import edilip kullanılıyor. `/projects` URL’i doğrudan ziyaret edilebilir.

---

## Sanity Şeması

**Project** (`sanity/schemas/project.tsx`):
- `title` (string)
- `overview` (string)
- `image` (image)
- `link` (string)

---

## Client / Server Bileşenleri

| Dosya | Tip | Açıklama |
|-------|-----|----------|
| `layout.tsx` | Server | Root layout |
| `page.tsx` | Server | Ana sayfa |
| `projects/page.tsx` | Server | Projeler (async getProjects) |
| `Provider.tsx` | Client | ThemeProvider |
| `Navbar.tsx` | Client | usePathname, Disclosure |
| `Themebutton.tsx` | Client | useTheme, useState |

---

## Konfigürasyon Özeti

- **Node:** 22.x (root + sanity)
- **Next.js images:** `cdn.sanity.io` domain
- **Tailwind:** `darkMode: "class"`
- **Path alias:** `@/*` → `./*`
- **Sanity projectId:** `z67vfiw2`, dataset: `production`

---

## Build & Deploy

- **Build:** `npm run build` (Next.js)
- **Sanity Studio:** `sanity dev` (ayrı process, port 3333)
- **Vercel:** Root `package.json` build, `sanity/` `.vercelignore` ile hariç
