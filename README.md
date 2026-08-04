**Personal Portfolio – Sayra Rodriguez**

**Overview**

This is my personal portfolio website built with React and Vite to showcase my projects, technical skills, and front-end development experience.

The site focuses on:
* Clean, component-based architecture
* Responsive design using modern CSS techniques (clamp, flexbox)
* Reusable UI components
* Clear visual hierarchy and typography

This project reflects my specialization in **React and modern front-end development**, with attention to scalability and maintainability.

**Tech Stack**
* React
* Vite
* React Router
* JavaScript (ES6+)
* CSS (inline styles with responsive scaling using clamp())

**Key Features**
* Fully responsive layout (desktop - working on mobile)
* Reusable ProjectCard and ProjectButton components
* Dynamic rendering of projects via structured data
* Scalable typography using CSS clamp()
* Clean, minimal UI with consistent spacing and hierarchy
* Smooth hover interactions for improved UX

**Project Structure**
```bash
src/
├── components/
│ ├── Navbar.jsx
│ ├── Pill.jsx
│ ├── ProjectButton.jsx
│ ├── ProjectCard.jsx
│
├── pages/
│ ├── About.jsx
│ ├── Home.jsx
│ ├── Portfolio.jsx
│
├── App.jsx
└── main.jsx
```
**Structure Notes**
* Pages contain high-level layout structure.
* Components are modular and reusable.
* Project content is passed via props to maintain separation of concerns.
* Routing is handled with React Router to support a single-page application structure.

**Running Locally**
```bash
npm install
npm run dev
```
Then open:  
http://localhost:5173


**Live Site:**

[View Portfolio](https://sayra-portfolio.netlify.app/)
