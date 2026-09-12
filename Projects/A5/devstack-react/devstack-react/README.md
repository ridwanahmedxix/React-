# Dev Stack

Dev Stack is a responsive React website for exploring development technologies and creating a personal technology stack. The UI is inspired by the provided Dev Stack reference design.

## ✨ Features

1. **Technology explorer** — Technology cards are loaded from a local JSON file and shown in a responsive grid.
2. **Interactive stack builder** — Add and remove technologies, prevent duplicates, and clear the complete stack.
3. **Responsive UI** — Sticky desktop/mobile navbar, responsive cards, stack sidebar, hero section, and footer.

## 🛠️ Technologies Used

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- React Toastify
- JSON

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

To create a production build:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
devstack-react/
├── public/
│   ├── data/
│   │   └── technologies.json
│   ├── favicon.svg
│   └── hero-stack.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── StackSidebar.jsx
│   │   └── TechnologyCard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to describe what the UI should look like in a clean and readable way.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. **State** is data a component owns and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates state inside a function component. I used it for the technology list, loading state, selected stack, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. I used it to fetch `technologies.json` when the app loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each list item. A unique key helps React update only the items that actually changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. Here, the stack sidebar shows an empty message when `stack.length === 0`; otherwise it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data through **props**. A child can send information back by calling a callback function that the parent passes as a prop.

## 🎨 Theme

The main brand gradient is defined once in `src/index.css` as `--brand-gradient`:

```css
--brand-gradient: linear-gradient(100deg, #ff6a2a 0%, #e3298b 52%, #7c3aed 100%);
```

Change that one value to re-theme the brand name, hero heading, and primary buttons.

## 📌 Notes

- Technology data is intentionally loaded with `fetch()` from `public/data/technologies.json`.
- Duplicate stack items are blocked.
- Add, duplicate, remove, and remove-all actions use React Toastify.
- The project uses a custom local SVG hero illustration so the main visual does not depend on a third-party image host.
