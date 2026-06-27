# Project-Scoped Rules - Akaribo Logistics

All code written in this repository must strictly adhere to the following standards to ensure accessibility, search visibility, responsiveness, and web compliance:

## 1. Web Accessibility (a11y)
- **Semantic HTML**: Always use appropriate tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<a>`) rather than styling generic `<div>` elements.
- **Focus Indicators**: Ensure all interactive elements have visible `:focus-visible` styling matching the brand colors (`rgb(238, 191, 111)`).
- **Keyboard Usability**: Navigation links, buttons, and form inputs must be fully accessible via keyboard. Use `button` tags for page triggers and anchor tags for external/route links.
- **ARIA Attributes**: Supply descriptive `aria-label`, `aria-expanded`, or `aria-controls` states on custom components (like the mobile menu toggles or dropdowns).
- **Alt Attributes**: All image elements must have descriptive `alt` tags.

## 2. Search Engine Optimization (SEO)
- **Heading Hierarchy**: Maintain a strict heading order (`h1` -> `h2` -> `h3`). There should only be one `h1` per page (typically the hero heading).
- **Meta Tags**: Maintain accurate titles and description meta tags on all pages.

## 3. Web Standards & Compliance
- **Vite & TS Guidelines**: Build output must compile successfully without warnings. Strip unused imports and verify strict typing.
- **Clean CSS Architecture**: Define style values in HSL/RGB custom variables inside `index.css`. Maintain clean media queries for responsive reflows.
