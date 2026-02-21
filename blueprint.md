# Lotto Number Generator Blueprint

## Project Overview
A simple, modern, and high-performance lotto number generator built using framework-less web standards (HTML, CSS, and JavaScript). It provides users with randomly generated sets of lotto numbers (1-45) in a visually appealing interface.

## Features
- **Lotto Number Generation:** Generates 5 rows of 6 unique numbers (1-45) on demand.
- **Sorted Results:** Each row is automatically sorted in ascending order for better readability.
- **Dynamic UI:** Numbers are displayed within colorful, animated circles.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Expressive Typography:** Uses the 'Poppins' font for a modern look.
- **Modern CSS Features:** Uses CSS Variables, Flexbox, and smooth transitions.
- **Dark/Light Mode:** Full support for dark and light themes with preference persistence.

## Tech Stack
- **HTML5:** Semantic structure and custom elements.
- **CSS3:** Modern styling with CSS variables, transitions, and responsive layout.
- **JavaScript (ES6+):** Functional programming patterns, DOM manipulation, and localStorage for theme persistence.

## Current Project Structure
- `index.html`: Main application entry point.
- `style.css`: All application styling, including theme definitions.
- `main.js`: Core logic for generation, UI updates, and theme management.
- `blueprint.md`: Project documentation and plan.

## Recent Changes
### Dark/Light Mode Implementation
- Added `:root` variables for light theme colors.
- Added `[data-theme="dark"]` variables for dark theme colors.
- Added a theme toggle button in `index.html`.
- Implemented `setTheme` and `toggleTheme` functions in `main.js`.
- Added persistence using `localStorage`.
- Added automatic system preference detection.
- Updated `main.js` to sort generated numbers.
