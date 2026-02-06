# System Architecture

## Technology Stack

| Component | Technology | Reasoning |
| :--- | :--- | :--- |
| **Framework** | React 18 | Industry standard, robust ecosystem. |
| **Build Tool** | Vite | Extremely fast dev server and optimized builds. |
| **Styling** | Tailwind CSS v4 | Utility-first, co-located styles, easy maintenance. |
| **Animation** | Framer Motion | Declarative animations for complex scroll reveals. |
| **Routing** | React Router DOM | Standard SPA client-side routing. |
| **Icons** | Lucide React | Clean, consistent, medical-appropriate iconography. |
| **Fonts** | Bricolage Grotesque | Distinctive, modern font used for all headings. |
| **Fonts** | DM Sans | High-readability font for body text and interactive elements. |

## Core Patterns

### 1. The "Layout" Pattern
We use wrapper components to enforce consistency across pages.
- **`ProductDetailLayout`**: A higher-order component that accepts config (title, icon, features) and renders a uniform Product Landing Page. This ensures `Berry Forms` and `Berry Pay` look related but distinct.
- **`LegalLayout`**: Enforces a sidebar/content structure for text-heavy pages.

### 2. Shadcn-Inspired UI
We do not use the raw `shadcn/ui` library dependency, but we follow its pattern of **unbundled ownership**.
- Components live in `src/components/ui/`.
- They own their styles via `cva` (Class Variance Authority) and `tailwind-merge`.
- **Why?** This gives you (the developer) total control over the code. You are expected to modify these files directly if the design system evolves.

### 3. Feature Grid Pattern
- **Text-Above-Visual Layout**: The homepage features section uses a grid where typography sits *above* large, graphical mockups. This establishes context before showing the proof.
- **Glassmorphism Containers**: Assets are housed in distinct, rounded containers with soft brand-colored gradients and shadows (`shadow-purple-900/5`), creating a premium "device on glass" aesthetic.

### 4. Glassmorphism & Gradients
- We use a custom CSS class `.mesh-gradient` in `index.css` for the hero backgrounds.
- We use `backdrop-blur` utilities from Tailwind for sticky headers and cards.
- **Rule**: Use transparency sparingly. It should feel like high-quality glass, not plastic.

## Directory Structure Intuition

- `src/pages/products/`: Contains the specific implementations of product pages. Note how they basically just configure the `ProductDetailLayout`.
- `src/lib/utils.js`: Contains the `cn()` helper. extensive usage of this is required whenever you accept a `className` prop.

## Deployment

This project uses **GitHub + Vercel** for continuous deployment.

| Resource | URL |
|----------|-----|
| **GitHub Repo** | [github.com/ilannit/berry-studio](https://github.com/ilannit/berry-studio) |
| **Production** | [berry-studio-sigma.vercel.app](https://berry-studio-sigma.vercel.app) |

### CI/CD Workflow
1. Push code to `main` branch on GitHub
2. Vercel automatically detects the push
3. Build runs (`npm run build`)
4. If successful, deploys to production

### Manual Deployment (CLI)
```bash
vercel --prod  # Deploy current state to production
```

