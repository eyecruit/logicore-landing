I want to clean and refactor my current Next.js project.

The original project was named **CRMSync**, but I’m now converting it into **LogiCore**, a clean, minimal frontend-only website for my web development agency.

### 🎯 Goals:

1. **Remove Everything Unused or Irrelevant**
   - Remove all files, folders, and components not actively used in the live frontend UI.
   - Specifically delete:
     - Any unused `pages/dashboard`, `api`, `auth`, `admin`, `settings`, or other internal tooling-related routes.
     - Any backend-related files or logic (like Prisma, DB config, server routes, context files for auth, etc.) unless directly used in UI display.
     - Unused utils, constants, services, providers, or legacy files.

2. **Keep Only the Relevant Frontend**
   - Retain only:
     - `pages/index.tsx`, `about.tsx`, `contact.tsx`, or any other pages that show up in the UI.
     - Reusable UI components from `/components` that are used on the website.
     - Layout files like `components/Layout.tsx` or `app/layout.tsx` (if using App Router).
     - Assets (images, fonts, icons) used on the frontend.
     - CSS/Theme files relevant to current design.

3. **Project-Wide Rebranding**
   - Replace all instances of **CRMSync** with **LogiCore** in:
     - Code comments
     - UI text
     - Component names (e.g., rename `CrmHeader.tsx` to `LogiCoreHeader.tsx`)
     - Metadata (e.g., title tags, Open Graph tags)
     - SEO data
     - README, if present
     - JSON files (like `package.json`, `siteConfig.ts`, etc.)

4. **Update Meta + Brand Identity**
   - Ensure the title/logo/meta references are changed from CRMSync to LogiCore.
   - Update favicon and brand images (if possible).
   - If any constants (like `siteName`, `appName`, or `APP_NAME`) are defined, update their values to `"LogiCore"`.

5. **Ensure a Clean Frontend-Only Project**
   - After cleanup, the project should:
     - Be purely frontend-based (Next.js).
     - Only contain pages, components, styles, and assets used in the LogiCore website.
     - Be ready for deployment as a marketing site or landing page.

### 🧠 Notes:
- Keep Tailwind CSS or any design system used in the visible frontend.
- Do not remove `public/` images, favicon, or branding assets unless unused.
- Do not touch functional visible components—even if you’re unsure—only remove clearly unused code.
- Keep the folder structure clean and minimal.
