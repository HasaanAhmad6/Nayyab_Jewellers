# 🌟 Nayyab Jewellers — Timeless Elegance & Bespoke Luxury

Welcome to the official repository for **Nayyab Jewellers**, a premium, state-of-the-art interactive storefront built for showcasing and ordering exquisite gold, sterling silver, and custom-designed artificial jewellery. Based in **Madina Market, Sarafa Bazar, Gujranwala**, the shop blends traditional craftsmanship with a modern, high-conversion digital shopping experience.

---

## ✨ Features

### 💎 Premium Obsidian-Gold Aesthetics
- **Luxury Visual Identity**: Built using a carefully selected color palette (deep obsidians, warm golds, champagne tones, and pearl creams) to evoke high-end luxury.
- **Sophisticated Typography**: Uses Google Fonts `Playfair Display` for elegant headlines and `Outfit` for clean, modern readability.
- **Glassmorphism & Micro-animations**: Sticky blur navbar, interactive hover scaling on cards, slide-in shopping bag drawers, and fade-in customization overlays.

### 🛍️ Dynamic Product Catalogue & Customizer
- **Category Filter System**: Instantly filter through Necklaces, Rings, Earrings, Mala & Chains, and Bracelets.
- **Detailed Customization Modal**: Clicking any item opens a dedicated options menu where customers can:
  - Select metal polish (e.g. 22K Gold Plating, 925 Sterling Silver, Rose Gold).
  - Choose sizes (incorporates standard Asian ring scale and bangle scale measurements).
  - Add free-form engraving or custom requests (e.g. customized chain lengths).
- **Dual Checkout Paths**: Order a single customized item instantly on WhatsApp, or add it to the bag for a bulk order.

### 🛒 Slide-out Shopping Bag & Checkout Drawer
- **Persistent Cart Badge**: A floating shopping bag trigger displaying items in the cart.
- **Quantity Adjustments**: Live increments, decrements, and removals.
- **Itemized WhatsApp Template**: The checkout button automatically compiles all products, configurations (metals, sizes, engraving notes), quantities, and pricing totals in PKR into a formatted order form.

### 🔨 Bespoke Workshop Consultation Form
- Customers can submit custom order designs (e.g. requesting a replica of a bridal set or local antique design) by providing their name, category choice, metal selection, budget range, and custom description.
- Submitting automatically generates a structured consultation prompt and opens WhatsApp to start a direct line of contact with **Waseem Ahmad**.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (Outfit, Playfair Display)
- **Styling**: Pure vanilla CSS styled for luxury responsive design

---

## 🚀 Getting Started

To run the project locally on your system, follow the steps below:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the Repository
```bash
git clone https://github.com/HasaanAhmad6/Nayyab_Jewellers.git
cd Nayyab_Jewellers
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173/Nayyab-Jewellers/` in your browser.

---

## 📦 Build for Production

To create a production-ready optimized build:

```bash
npm run build
```

This compiles the assets into the `/dist` directory. To test the build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
Nayyab_Jewellers/
├── index.html            # Core entry file linked with Outfit & Playfair Display fonts
├── vite.config.js        # Vite configurations containing base path paths
├── package.json          # React, Vite, and Lucide React packages
├── public/               # Static assets (images, logos, SVGs)
└── src/
    ├── App.jsx           # Core application containing state, catalog, cart, and modals
    ├── App.css           # Premium obsidian-gold stylesheets and responsive grids
    ├── index.css         # Reset and foundational layout rules
    └── main.jsx          # Mounts React application
```

---

## 📍 Contact & Showroom Details

* **Owner**: Waseem Ahmad
* **WhatsApp Order Support**: +92 319 0224901
* **Address**: Nayyab Jewellers, Madina Market, Sarafa Bazar, Gujranwala, Punjab, Pakistan.
* **Hours**: Daily 11:00 AM - 9:00 PM