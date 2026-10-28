# bronce.org

A personal website built with Astro. The site uses a shared dark layout, a full-screen navigation menu, and a Markdown/MDX blog.

## Where to edit things

| Change | File or folder |
| --- | --- |
| Name, intro, menu links, social links, and projects | `src/consts.ts` |
| Site colors, spacing, typography, and responsive styles | `src/styles/global.css` |
| Homepage sections and latest-post list | `src/pages/index.astro` |
| Menu behavior and page selection | `src/components/SiteMenu.astro` |
| Social icon markup | `src/components/SocialLinks.tsx` |
| About page copy | `src/pages/about.astro` |
| Blog posts | `src/content/blog/` |
| Blog post metadata requirements | `src/content.config.ts` |
| Shared page shell and metadata | `src/layouts/SiteLayout.astro`, `src/components/BaseHead.astro` |

Add a project to the `PROJECTS` list in `src/consts.ts`. The homepage section and menu group appear automatically when that list has entries.

## Project structure

```text
src/
  assets/       Images and local fonts
  components/   Reusable page pieces and the site menu
  content/blog/ Markdown and MDX posts
  layouts/      Shared document and article layouts
  pages/        URL routes, including the RSS endpoint
  styles/       Site-wide theme and layout rules
  consts.ts     Editable site identity and navigation data
```

## Local commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Publishing

The `main` branch deploys through GitHub Pages using `.github/workflows/deploy.yml`. After GitHub Pages is enabled for the repository and `bronce.org` is connected in its Pages settings, each push to `main` automatically publishes the site. The custom domain is kept in `public/CNAME` so it is included in the built site.

Replace the example blog posts in `src/content/blog/` with your own writing before publishing. Update `PROFILE`, `SOCIAL_LINKS`, and `PROJECTS` in `src/consts.ts` as the site grows.
