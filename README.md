Here’s a clean, professional, and well-structured **README.md** for your portfolio project — written in English and suitable for GitHub.

---

# **BENNART — Personal Portfolio Website**

A modern, minimalistic, and motion-driven personal portfolio built with **Next.js**, **Framer Motion**, and **Tailwind CSS**.
This project showcases design thinking, visual exploration, and creative coding through smooth interactions, adaptive theming, and scroll-aware behaviors.

---

## 🚀 **Features**

### **🎨 Adaptive Theming**

* Fully supports **light/dark mode** using `next-themes`
* Theme choice is saved to local storage
* Dynamic SVG color that responds to theme changes
* Navbar gradient that blends seamlessly with the page background

### **🧭 Smart Scroll-Aware Navbar**

* Displays `© BENNART` by default
* Automatically switches to show active section name when scrolling
* Smooth animation using **Framer Motion**
* Responsive behavior for mobile and desktop layouts

### **📝 Animated Text Reveal**

* Hero section text reveals with timed sequential animation
* Footer letters reveal horizontally in a staggered sequence
* Uses Framer Motion’s variants and viewport detection

### **👆 Interactive Micro-Interactions**

* Hover-triggered text transitions
* Smooth scroll anchors
* Animated logo and navigation elements
* Mobile-first UI with breakpoints refined for larger screens

---

## 🧰 **Tech Stack**

| Technology        | Purpose                                      |
| ----------------- | -------------------------------------------- |
| **Next.js 14**    | Framework, routing, SSR/CSR                  |
| **React 18**      | UI components                                |
| **Tailwind CSS**  | Styling and responsive structure             |
| **Framer Motion** | Animations, scroll-based motion, transitions |
| **next-themes**   | Theme management                             |
| **Lucide Icons**  | Iconography                                  |
| **TypeScript**    | Type safety                                  |

---

## 📁 **Project Structure**

```
root/
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   └── Title.tsx
├── util/
│   └── svg.tsx
├── app/
│   ├── page.tsx
│   ├── globals.css
│   └── layout.tsx
└── public/
```

---

## ⚙️ **Key Animation Logic**

### **Scroll Detection**

A custom `scroll + requestAnimationFrame` loop detects section visibility:

* Title visible → navbar resets
* Title scrolled above but section still in viewport → navbar shows section name
* Section fully out of viewport → reset to default

This ensures smooth, consistent behavior regardless of content height or viewport size.

---

## 🎯 **Goals of This Portfolio**

* Present identity and visual style through motion
* Demonstrate ability to merge design thinking and frontend engineering
* Build an interactive space where ideas translate into visuals and code
* Highlight both aesthetic sensibility and technical precision

---

## 🧪 **Development**

### Install dependencies:

```bash
npm install
```

### Run local development server:

```bash
npm run dev
```

### Build for production:

```bash
npm run build
```

---

## 📬 **Contact**

Feel free to connect:

* **LinkedIn:** [https://www.linkedin.com/in/bennartdemgunawan](https://www.linkedin.com/in/bennartdemgunawan)
* **GitHub:** [https://github.com/bennartdg](https://github.com/bennartdg)
* **Instagram:** [https://www.instagram.com/bennartdg](https://www.instagram.com/bennartdg)
* **Email:** [bennart.dgunawan@gmail.com](mailto:bennart.dgunawan@gmail.com)

---

If you'd like, I can also generate:
✅ A more creative version
✅ A minimal corporate-style README
✅ A version with preview images and GIFs
Just let me know!
