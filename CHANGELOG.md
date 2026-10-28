# Changelog

Notable website changes are recorded here, with the newest work first.

## 2026-10-27

### Changed

- Switched the site to a lighter system font and reduced heading, body, post-link, and menu text sizes and weights.
- Renamed the menu’s project area to Apps and added a responsive icon grid with optional dates and simple initial fallbacks.
- Extended the shared project data so app names, links, dates, and icon paths stay together in `src/consts.ts`.
- Removed the unused bundled Atkinson font setup after switching to system fonts.

### Added

- Added a full-screen navigation menu with a hamburger-to-close icon, keyboard controls, page links, project links, and social links.
- Added breadcrumbs beside the menu control on About, Writing, and individual post pages. The homepage keeps its profile heading without a breadcrumb.
- Added a shared page layout and a reusable blog-post layout.
- Added this changelog to keep future site updates in one place.
- Added a GitHub Pages deployment workflow and the `bronce.org` custom-domain file.

### Changed

- Reworked the Astro starter into a dark, responsive personal website with a shared visual theme and bundled Atkinson font.
- Centralized the site identity, navigation, social destinations, and project list in `src/consts.ts` for easier editing.
- Updated the homepage, About page, Writing index, blog posts, and RSS feed to use the shared site structure.
- Added a subtle fade when the menu opens or closes. Page navigation now leaves the menu in place until the next page loads, avoiding a flash of the previous page.
- Added project setup notes and a file guide in `README.md`.
- Documented GitHub Pages publishing in `README.md`.
- Removed unused starter header and footer components and the help page. Kept the small `HeaderLink.astro` component because an existing MDX post uses it.

### Earlier history

- Started from the Astro starter site and made initial footer and footer-link updates before the larger layout redesign.
