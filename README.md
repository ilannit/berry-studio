# BerryStudio: Modern Practice Management UI

> **Status**: v1.0 (Handover Ready)  
> **Tech Stack**: React, Vite, Tailwind CSS (v4), Framer Motion  
> **GitHub**: [github.com/ilannit/berry-studio](https://github.com/ilannit/berry-studio)  
> **Live Site**: [berry-studio-sigma.vercel.app](https://berry-studio-sigma.vercel.app)

## 👋 Welcome to BerryStudio

BerryStudio is the next-generation marketing website for an AI-powered orthodontic practice management platform. Our design philosophy is **"Premium Clinical Precision"**—a sophisticated blend of high-end aesthetics and medical-grade reliability.

This project is built as a static Single Page Application (SPA) designed to wow enterprise buyers and practice owners.

---

## 🚀 Quick Start

If you are new here, follow these steps to get the site running locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

---

## 📚 Documentation Map

We have prepared detailed documentation to help you understand the codebase:

- **[Scope & Vision](./doc/scope_and_vision.md)**: Understand *why* we built it this way and who it's for.
- **[Architecture & Tech](./doc/architecture.md)**: deep dive into the code structure, styling choices, and routing.
- **[Getting Started](./doc/getting_started.md)**: A handbook for setting up your environment and making your first change.

---

## 📂 Project Structure

```text
src/
├── assets/          # Static images and illustrations
├── components/      # Reusable React components
│   ├── layout/      # Structural components (Navbar, Footer)
│   └── ui/          # Atomic components (Button, Card, Input)
├── lib/             # Utilities (Tailwind class merger)
├── pages/           # Page views (Home, Products, Legal)
├── App.jsx          # Main Routing configuration
└── main.jsx         # Entry point
```

---

## 👨‍💻 For the Developer taking over

1.  **Read the docs in `./doc/` first.** They clarify the "intuition" behind the code.
2.  **Check leaf folders.** We have placed `README.md` files in key directories (like `src/components/ui`) to explain how to use specific components.
3.  **Preserve the Design.** This isn't just a website; it's a premium brand. Keep the gradients soft, the whitespace generous, and the animations smooth.

Happy coding! 🚀
