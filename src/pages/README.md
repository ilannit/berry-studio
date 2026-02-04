# Pages Directory

This folder mimics the sitemap or routing structure of the application.

## Directory Map

### 1. `company/`
Pages related to the organization.
- `About.jsx`: Mission, vision.
- `Careers.jsx`: Job listings.

### 2. `legal/`
Compliance documents. Note that `Legal.jsx` exports multiple small components (`Privacy`, `Terms`, `Hipaa`) instead of separate files, as they share the exact same layout.

### 3. `products/`
The core marketing landing pages.
- `BerryForms.jsx`
- `BerryPlans.jsx`
- `BerryTasks.jsx`
- `BerryPay.jsx`
*All these use `ProductDetailLayout`.*

### Root Pages
- `Home.jsx`: The main landing page.
- `Contact.jsx`: Lead capture form.
- `Modules.jsx` & `Initiatives.jsx`: Secondary landing pages.

---

## How to add a new page?
If you add a file here, **it does not automatically become a route**. You must manually update `src/App.jsx` to import your new page and assign it a URL path.
