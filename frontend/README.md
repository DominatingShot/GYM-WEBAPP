# 🚀 Akshaj's Personal Portfolio — Frontend

Welcome to the frontend of my professional portfolio. This project represents a fusion of **Data Engineering logic** and **Modern Web Design**, built with a focus on speed, high-end aesthetics, and interactive user experiences.

---

## 🎨 Design Philosophy: "Neo-Brutalist Data Professional"
Unlike generic corporate portfolios, this site adopts a **Neo-Brutalist** design system.
- **High Contrast**: Using a restricted palette (`#F2F2F2` background vs `#1A1A1A` text) for maximum readability and a bold "industrial" feel.
- **Hard Shadows**: Instead of soft blurs, we use solid 8px/12px offset shadows to give the UI a tactile, "physical" presence.
- **Dynamic Animation**: Every page life-cycle and user interaction is enhanced with Framer Motion to ensure the site feels responsive and alive.
- **Thematic Branding**: Floating icons representing **Games**, **Music**, and **Coding** provide a subtle watermark-style background that personalizes the professional space without being distracting.

---

## 🛠 Tech Stack & Why I Chose Them
| Tech | Role | Rationale |
| :--- | :--- | :--- |
| **React 19** | Core Framework | Leverages the latest concurrent rendering features for a snappy feel. |
| **Vite** | Build Tool | Lightning-fast HMR (Hot Module Replacement) and optimized production bundles compared to CRA. |
| **Tailwind CSS 4** | Styling | Utility-first approach allows for rapid iteration of complex Brutalist layouts without leaving the JSX. |
| **Framer Motion** | Animations | Industry standard for high-performance declarative animations (Marquees, Page Transitions, Pop-out Modals). |
| **Lucide React** | Iconography | Lightweight, consistent, and easily stylable vector icons. |
| **React Router 7** | Navigation | Robust client-side routing for a seamless Single Page Application (SPA) experience. |

---

## ✨ Key Features
### 1. **Hyper-Interactive Hero Section**
- **Angled Marquee Bar**: A rotating display of core technical skills (`SQL`, `PYTHON`, `AZURE`, etc.) that captures attention immediately.
- **Decorative Background Icons**: Scattered background layer with floating icons that follow a staggered entrance animation on load.

### 2. **Professional Experience (About Page)**
- **Timeline-based Storytelling**: Experience and Education are laid out in high-contrast cards.
- **Resume Integration**: Integrated PDF download functionality directly into the UI.

### 3. **Interactive Project Showcase**
- **Dynamic Filtering**: A category-based filter system (Full Stack, AI/ML, Data Engineering) using React state.
- **Pop-out Details**: Clicking a project doesn't just open a link; it expands into a **full-screen modal details view** with an `AnimatePresence` transition.
- **Smart Feedback Icons**: Project links (GitHub/External) use conditional logic:
    - 🟢 **Green on Hover**: Link is active and reachable.
    - 🔴 **Red on Hover**: Link is currently a placeholder, providing immediate visual feedback.

### 4. **Conversion-Focused Contact Page**
- **Brutalist Form**: A clean but bold contact form designed for quick communication.
- **Social Grid**: Quick-access cards to professional networks like LinkedIn and GitHub.

---

## 📂 Project Structure
```text
src/
├── assets/          # Compressed images and PDF Resume
├── components/
│   ├── common/      # Reusable UI watermarks (BackgroundIcons)
│   ├── layout/      # Shared wrapper components (Navbar)
│   └── specific/    # Complex units (Hero section)
├── pages/           # High-level page components (Home, About, Projects, Contact)
├── App.jsx          # Router configuration and global entry
└── index.css        # Global CSS variables and Tailwind directives
```

---

## 🚀 Recreating the Project
1. **Clone the repo**:
   ```bash
   git clone https://github.com/DominatingShot/GYM-WEBAPP.git
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```
4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 💡 Potential Interview Questions
**Q: Why use absolute positioning for the background icons?**
*A: To ensure they remain part of the visual background layer without affecting the document flow of the main content. We use `pointer-events-none` so they don't interfere with user interactions.*

**Q: How did you handle the project detail view?**
*A: I implemented a modal system using a `selectedProject` state. When a card is clicked, it populates this state. Framer Motion's `AnimatePresence` is used to smoothly mount/unmount the modal from the DOM with a backdrop-blur effect.*

**Q: Why Neo-Brutalism?**
*A: It stands out. In a sea of "clean and soft" portfolios, Brutalism projects confidence, technical directness, and a modern edge that aligns with my background in data engineering where structure and clarity are paramount.*
