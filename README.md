# Inland Pacific Coatings — Next.js Starter

## What this includes
- Next.js App Router starter
- Homepage
- Countertop authority page
- Coeur d'Alene and Spokane location pages
- Decorative floors page
- Garage floor systems page
- Outdoor surfaces page
- Contact page
- Sitemap and robots file

## Before running locally
1. Put your logo image in `public/ipc-logo.jpg`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`

## Deploying to Vercel
1. Push this folder to your GitHub repo
2. Import the repo into Vercel
3. Set your production domain to `ipcepoxy.com`
4. Deploy

## Recommended next tasks
- Replace placeholder images with real project photos
- Connect the estimate form to Formspree, Basin, Resend, or your preferred form handler
- Add Google Analytics and Search Console
- Add service-area expansion pages later

## Site structure
The site is organized around four core services (defined in `app/lib/services.ts`):
- **Concrete Coating & Sealing** → `/concrete-coatings`
- **Epoxy Floors & Countertops** → `/epoxy`
- **Painting** → `/painting`
- **Roof Rejuvenation** → `/roof-rejuvenation`

First-time visitors who land on the homepage see a "What kind of coating are you looking for today?"
prompt (`app/components/ServiceChooser.tsx`). It only shows once per browser and never on deep links
from Google or ads.

## Photos (swapping placeholders for real photos)
Every image on the site is registered in `app/lib/photo-list.json`. Anything without a `src` uses a
generated placeholder from `public/placeholders/`.

1. Put the real photo in `public/photos/` (e.g. `public/photos/garage-1.jpg`).
2. In `app/lib/photo-list.json`, find the key (e.g. `"garage-floor-coatings-1"`) and set
   `"src": "/photos/garage-1.jpg"` and a descriptive `"alt"`.

To add new placeholder slots, add an entry to the JSON and run `node scripts/make-placeholders.mjs`.
