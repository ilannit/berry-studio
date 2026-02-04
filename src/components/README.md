# Components Directory

This directory is divided into two distinct categories:

## 1. `layout/`
**Purpose**: Structural components that define the "skeleton" of a page.
- **`Navbar.jsx`**: The responsive top navigation.
- **`Footer.jsx`**: The site-wide footer (recently compacted).
- **`ProductDetailLayout.jsx`**: A template for product pages to ensure consistency.

## 2. `ui/`
**Purpose**: Atomic, reusable building blocks.
- **Philosophy**: These components are "dumb". They receive props and render styles. They do not handle business logic or API calls.
- **Reference**: See the README inside `ui/` for specific usage examples of Buttons, Cards, inputs, etc.

---

### Best Practices
- If a component is used on **only one page**, define it inside that page or a subfolder next to it.
- If a component is used on **multiple pages**, promote it to `src/components/`.
