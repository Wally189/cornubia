# Cornubia Refresh (static demo)

A lightweight, mobile-first static site for **The Cornubia** pub. All copy and imagery are placeholders to be replaced with real content. Designed to deploy directly to GitHub Pages with no build step or external dependencies.

## Structure
- `index.html` — Home
- `beer.html` — Rotating cask/cider overview
- `whats-on.html` — Events listing
- `visit.html` — Directions, hours, accessibility
- `404.html` — Friendly not-found page
- `assets/css/styles.css` — Single stylesheet with light/dark theme
- `assets/js/main.js` — Small enhancements (year + mobile toggle)
- `assets/img` — Placeholder artwork
- `assets/icons/favicon.svg` — Favicon
- `sitemap.xml`, `robots.txt` — Basic SEO scaffolding

## Running locally
No tooling is required. Open `index.html` in your browser or run a simple server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages
1. Push the contents of this repository to the `main` branch.
2. In **Settings → Pages**, select **Source: Deploy from a branch** and choose `main` with the `/ (root)` folder.
3. Save. Pages will build and publish automatically.

## Replacing placeholder content
- Update the copy on each HTML page with real descriptions, events, and contact details.
- Swap placeholder images in `assets/img/` and the favicon in `assets/icons/`.
- Replace the canonical/OG URLs with the live site URL.
- Adjust opening hours, accessibility notes, and map links as needed.
