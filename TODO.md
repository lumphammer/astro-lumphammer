# Code Review TODO

This file contains suggestions from a code review conducted on the astro-lumphammer project.

## 🟡 Improvements

### 1. Misplaced Component: `TripleChevron.astro`

- [x] Move `src/TripleChevron.astro` to `src/components/TripleChevron.astro`
- [x] Fix typo: `margin: "00.5em"` should be `margin: "0 0.5em"`

### 2. Duplicate Asset

- [x] Remove `src/assets/TripleChevron copy.svg` (appears to be an accidental copy)

### 3. Empty CSS Rules in `globals.css`

- [x] Either remove the empty rulesets or uncomment the variables if needed
- [x] Linter warnings at lines 1 and 7 for empty rules

### 4. Type Safety in Worker

- [x] Consider adding explicit type annotations to `src/worker.ts` parameters instead of using `@ts-expect-error`
- [x] Or file an issue upstream with `@astrojs/cloudflare` if types are broken

### 5. Non-null Assertion in Navigation

- [x] Replace `document.body.parentElement!` in `src/components/Navigation.tsx` with safer access:
  ```tsx
  const htmlElement = document.documentElement;
  if (htmlElement) {
    htmlElement.style.overflow = "auto";
  }
  ```

### 6. Remove Unnecessary `"use client"` Directive

- [x] Remove `"use client"` from `src/components/ThemeSwitcherIcon.tsx` (Astro handles client hydration via `client:*` directives)

### 7. Rename Underscore-prefixed Variable in Actions

- [x] In `src/actions/index.ts`, rename `_input` to `input` in the `increment` handler since `incrementBy` is actually used

### 8. Counter Page (Dev/Test Page)

- [ ] Decide whether `/counter` should be in production
- [ ] Consider moving to a dev-only location or removing
- [ ] At minimum, exclude from sitemap if keeping

### 9. Dynamic Page Titles

- [ ] Add a `title` prop to `src/layouts/Layout.astro`
- [ ] Update each page to pass an appropriate title
- [ ] Use format like `{title} | Lumphammer` or just `Lumphammer` for home

### 10. Self-host Geist Font

- [ ] Replace Google Fonts import with local font (there's already a commented local import in `main.scss`)
- [ ] This improves performance and avoids render-blocking external requests

### 11. Add Meta Descriptions

- [ ] Add `<meta name="description">` to the Layout
- [ ] Consider making it configurable per-page for better SEO

### 12. Remove Debug Attribute

- [ ] Remove `data-currentpath={currentPath}` from `src/components/NavigationLink.tsx`

## 🔴 Potential Issues

### 1. Beta Dependencies

The following core dependencies are beta versions, which may be unstable:

- `astro: 6.0.0-beta.1`
- `@astrojs/cloudflare: 13.0.0-beta.0`
- `@astrojs/react: 5.0.0-beta.1`
- `@astrojs/check: 0.9.6-beta.1`

- [ ] Consider pinning to stable versions for production
- [ ] Or monitor for breaking changes carefully

### 2. Future Compatibility Date

- [ ] Change `compatibility_date` in `wrangler.jsonc` from `2026-01-04` to a valid past date

### 3. PostHog API Key

- [ ] Consider moving the PostHog API key to an environment variable for flexibility (note: client-side analytics keys are expected to be public, so this is low priority)

## ✅ Strengths (No Action Needed)

- Clean project structure following Astro conventions
- Well-designed theme system with flash prevention
- Good accessibility (ARIA labels, `aria-current`, roles)
- Modern tooling (oxlint, Prettier, pnpm, Renovate)
- Excellent Sass mixin documentation