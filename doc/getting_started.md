# Getting Started Guide

Welcome to the team! This guide will take you from zero to shipping code on BerryStudio.

## Prerequisites
- **Node.js**: Version 18+ recommended.
- **npm**: Comes with Node.js.

## Installation
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ilannit/berry-studio.git
    cd berry-studio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # This installs React, Vite, Tailwind, Framer Motion, and Lucide.
    ```

## Development Workflow

### 1. Start the Dev Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`. Vite Hot Module Replacement (HMR) is active, so changes save instantly.

### 2. Making a Style Change
We use **Tailwind CSS**. 
- **Don't** write new `.css` files.
- **Do** add utility classes directly to JSX elements.
- **Example**: Changing a button color.
  ```jsx
  // Before
  <div className="bg-blue-500">
  
  // After (Using our Berry Teal brand color)
  <div className="bg-primary"> 
  ```

### 3. Adding a New Page
1.  Create the file in `src/pages/` (e.g., `NewPage.jsx`).
2.  Export it as default.
3.  Open `src/App.jsx`.
4.  Import your component.
5.  Add a `<Route path="/new-page" element={<NewPage />} />` inside `<Routes>`.

### 4. Building for Production
Before pushing code, strictly check if the build passes.
```bash
npm run build
```
If this fails, **do not merge**. The error log is usually very descriptive about missing imports or syntax errors.

### 5. Deployment (Vercel)
We use Vercel for hosting. 
-   **Preview**: Pushing to any branch (except `main`) generates a preview URL.
-   **Production**: Pushing to `main` (or running `vercel --prod`) updates the live site.
-   **CLI**: If you have the Vercel CLI installed:
    ```bash
    vercel        # Deploy preview
    vercel --prod # Deploy to production
    ```

## Common Issues
- **"Unknown utility class"**: You might be trying to use a Tailwind class that doesn't exist or isn't configured. Check `tailwind.config.js` (or `index.css` for v4 variables).
- **"Module not found"**: Check your import paths. `@/` alias is not currently set up; use relative paths `../../`.
- **Node Version**: If you encounter issues with package installs, ensure you are on Node 18+. You can use `nvm wrap` or similar if configured.
