# Astro Template Kit

A modern **Astro + TailwindCSS + DaisyUI** starter template for building reusable website templates.

This project is designed as a **master template system** to quickly create websites such as:

- Developer portfolios
- Agency websites
- SaaS landing pages
- Startup landing pages
- Local business websites

The goal is to maintain a **clean architecture, reusable sections, and fast development workflow**.

---

## 🚀 Features

- ✅ Astro based static site architecture
- ✅ TailwindCSS utility styling
- ✅ DaisyUI component system
- ✅ Modular section components
- ✅ Clean layout architecture
- ✅ Prettier auto formatting
- ✅ Optimized for reusable templates
- ✅ Minimal dependencies

---

## 🧱 Tech Stack

This template uses the following technologies:

- **Astro**
- **TailwindCSS**
- **DaisyUI**
- **TypeScript**
- **Prettier**
- **Node / Bun**

---

## 📦 Installed Packages

Main packages used in this project:

```bash
astro
tailwindcss
daisyui
@tailwindcss/typography
prettier
prettier-plugin-tailwindcss
```

Install dependencies:

```bash
npm install
```

or

```bash
bun install
```

---

## 🚀 Development

Start the development server:

```bash
npm run dev
```

Open your browser:

```
http://localhost:4321
```

---

## 📁 Project Structure

```text
src
│
├─ components
│  ├─ layout
│  │  ├─ Navbar.astro
│  │  ├─ Footer.astro
│  │  └─ PageShell.astro
│  │
│  ├─ sections
│  │  ├─ Hero.astro
│  │  ├─ Features.astro
│  │  ├─ CTA.astro
│  │  └─ Testimonials.astro
│
├─ layouts
│  └─ BaseLayout.astro
│
├─ pages
│  └─ index.astro
│
├─ styles
│  └─ global.css
│
└─ assets
```

---

## 🧩 Architecture

The template follows a **modular component architecture**.

### Layout System

```
BaseLayout
 └ PageShell
     ├ Navbar
     └ Footer
```

### Section System

Pages are built by composing reusable UI sections such as:

- Hero
- Features
- Services
- Testimonials
- FAQ
- Call To Action

This allows building new templates quickly.

---

## 🎨 Styling

Styling is handled using:

- **TailwindCSS utilities**
- **DaisyUI components**

Example:

```astro
<button class="btn btn-accent"> Get Started </button>
```

Custom CSS should be minimized.

---

## 🧹 Code Formatting

The project uses **Prettier**.

Formatting runs automatically on save.

Example `.prettierrc` configuration:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 100
}
```

---

## 🧰 Recommended VS Code Extensions

Install these extensions for the best developer experience:

- Astro
- Tailwind CSS IntelliSense
- Prettier
- ESLint
- Material Icon Theme

---

## 🧱 Creating New Templates

This project is intended to generate multiple website templates.

Planned templates:

1. SaaS Landing Page
2. Agency Website
3. Developer Portfolio
4. Startup Landing Page
5. Local Business Website

Each template will reuse the same component system.

Example page structure:

```
Hero
Features
Services
Testimonials
FAQ
CTA
Footer
```

---

## 🧠 Development Philosophy

This template is designed to be:

- modular
- reusable
- fast to extend
- easy to maintain

Focus on **component reuse instead of rewriting UI**.

---

## 📌 Future Improvements

Possible improvements for the template kit:

- Multiple navbar variants
- Multiple hero variants
- Section library
- Theme switching
- Component presets
- CMS integration

---

## 👀 Want to learn more?

- Astro documentation: https://docs.astro.build
- TailwindCSS documentation: https://tailwindcss.com
- DaisyUI documentation: https://daisyui.com

---

## Author

Created by **Calem**

This project is part of a personal portfolio and serves as a base for building reusable web templates.
