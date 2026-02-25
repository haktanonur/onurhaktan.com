# onurhaktan.com — Code Review

Tarih: Ocak 2026

---

## Özet

Proje genel olarak sade ve işlevsel. Aşağıda tespit edilen sorunlar, iyileştirme önerileri ve güvenlik notları yer alıyor.

---

## Kritik / Yüksek Öncelik

### 1. Kullanılmayan Prisma Bağımlılığı
**Konum:** `package.json`

`@prisma/client` ve `prisma` yüklü ancak `schema.prisma` yok ve hiçbir yerde kullanılmıyor.

**Öneri:** Kullanılmıyorsa kaldırın:
```bash
npm uninstall @prisma/client prisma
```

---

### 2. Next.js `images.domains` Deprecated
**Konum:** `next.config.js`

`images.domains` kullanımı Next.js 14+ ile deprecated. `images.remotePatterns` kullanılmalı.

**Öneri:**
```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      pathname: '/**',
    },
  ],
},
```

---

### 3. Sanity `deskTool` Deprecated
**Konum:** `sanity/sanity.config.ts`

`deskTool` yerine `structureTool` kullanılmalı (Sanity v3).

**Öneri:**
```ts
import { structureTool } from 'sanity/structure'
// ...
plugins: [structureTool(), visionTool()]
```

---

## Orta Öncelik

### 4. Typo: `justfiy-between`
**Konum:** `app/components/Navbar.tsx` satır 15

```tsx
<div className="flex justfiy-between h-16">
```
`justfiy` → `justify`

---

### 5. Proje Görselleri Devre Dışı
**Konum:** `app/projects/page.tsx`

`Image` bileşeni yorum satırına alınmış. Sanity şemasında `image` alanı var ama frontend’de gösterilmiyor.

**Öneri:** Görselleri tekrar etkinleştirin veya şemadan `image` alanını kaldırın. Etkinleştirirseniz `next.config` içinde `cdn.sanity.io` zaten tanımlı.

---

### 6. Light Mode’da Okunabilirlik
**Konum:** `app/projects/page.tsx` satır 79

```tsx
<p className="mt-6 text-sm text-center text-white">Check out more projects on my GitHub</p>
```

`text-white` light mode’da kontrast sorunu yaratabilir.

**Öneri:**
```tsx
className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400"
```

---

### 7. Tailwind Content Paths
**Konum:** `tailwind.config.ts`

`content` içinde `./pages/**` ve `./components/**` var; projede bu klasörler yok. Sadece `./app/**` kullanılıyor.

**Öneri:** Gereksiz path’leri kaldırın:
```ts
content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
```

---

### 8. Tailwind Plugins Kullanılmıyor
**Konum:** `tailwind.config.ts`, `package.json`

`@tailwindcss/forms` ve `@tailwindcss/typography` yüklü ama `tailwind.config.ts` içinde `plugins` boş.

**Öneri:** Kullanıyorsanız ekleyin:
```ts
plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
```
Kullanmıyorsanız `package.json`’dan kaldırın.

---

### 9. Sanity projectId Hardcoded
**Konum:** `app/lib/sanity.ts`, `sanity/sanity.config.ts`, `sanity/sanity.cli.ts`

`projectId` ve `dataset` doğrudan kodda. Bu public bilgi olsa da env ile yönetmek daha iyi.

**Öneri:**
```ts
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'z67vfiw2'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
```

---

## Düşük Öncelik / İyileştirmeler

### 10. Layout’taki Yorum Satırları
**Konum:** `app/layout.tsx`

Eski `body` ve `inter` font blokları yorumda. Temizlenebilir.

---

### 11. Inline Style
**Konum:** `app/projects/page.tsx`

```tsx
style={{ maxWidth: "330px" }}
style={{ color: "#f0f6fc" }}
```

Tailwind sınıflarına taşınabilir: `max-w-[330px]`, `text-[#f0f6fc]`.

---

### 12. External Image Domain
**Konum:** `app/page.tsx`

`me.jpeg` `@/public` üzerinden kullanılıyor, sorun yok. Tech stack badge’leri `img.shields.io` üzerinden; Next.js `Image` ile kullanılırsa `next.config`’e domain eklenmeli. Şu an `<img>` ile kullanıldığı için ek konfigürasyon gerekmiyor.

---

### 13. Proje Yapısı: Page vs Component
**Konum:** `app/page.tsx`, `app/projects/page.tsx`

`Projects` aslında bir sayfa bileşeni ama ana sayfada section olarak import ediliyor. Bu yapı çalışıyor ancak:

- `/projects` route’u ayrı bir sayfa olarak da erişilebilir
- Ana sayfada “Projects” bölümü ile `/projects` içeriği aynı

İleride farklılaşacaksa (ör. ana sayfada özet, `/projects`’te tam liste) ayrı bir `ProjectsSection` component’i oluşturulabilir.

---

### 14. Metadata İyileştirmesi
**Konum:** `app/layout.tsx`

```ts
export const metadata: Metadata = {
  title: 'Onur Haktan',
  description: 'This is my portfolio',
}
```

`metadataBase`, `openGraph`, `twitter` gibi alanlar eklenebilir (SEO ve sosyal paylaşım için).

---

### 15. Erişilebilirlik
- `Themebutton`: `aria-label` eklenebilir
- Sosyal link ikonları: `aria-label` veya görünür metin önerilir

---

## Güvenlik

- Sanity `projectId` public API için kullanılıyor; gizli değil, env ile yönetmek yeterli
- `.env*.local` `.gitignore`’da
- Harici script/CDN yok

---

## Pozitif Noktalar

- Next.js 15 App Router kullanımı
- Server Components ile veri çekimi
- ISR (`revalidate: 60`) ile projeler
- Dark/Light mode
- TypeScript
- Vercel Analytics ve Speed Insights entegrasyonu
- Sade ve okunabilir kod yapısı

---

## Önerilen Aksiyon Listesi

| # | Aksiyon | Öncelik |
|---|---------|---------|
| 1 | Prisma kaldır veya kullan | Yüksek |
| 2 | `next.config` images → `remotePatterns` | Yüksek |
| 3 | Sanity `deskTool` → `structureTool` | Yüksek |
| 4 | Navbar typo düzelt | Orta |
| 5 | Projects `text-white` → tema uyumlu | Orta |
| 6 | Tailwind content paths sadeleştir | Orta |
| 7 | Sanity env variables | Orta |
| 8 | Inline style’ları Tailwind’e taşı | Düşük |
| 9 | Layout yorumlarını temizle | Düşük |
| 10 | Metadata ve a11y iyileştirmeleri | Düşük |
