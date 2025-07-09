# Tailwindcss 
    - Version (3.4.17)

# Features Side Bar
    - OTP Validator
    - Progress Bar

# Lazy Loading
## lazy load component:
    - OTP Validator
    - Progress Bar

# OTP Validator
    - Individual Input Fields:
    - State Management
    - Focus Management
        - Automatic Focus Shift
    - OnChange
    - Arrow Key Navigation
        - onKeyDown 
    - DOM
        - `useEffect` is used to handle DOM interaction on component mount.
        - Focus is set using: `refArr.current[0]?.focus();`
        - Refs (`useRef`) are used to store references to input DOM elements.

# 📊 Progress Bar Component

A simple and animated progress bar component built using **React** and **TailwindCSS**.

---

## ✅ Features

- **Predefined Progress Steps**  
  A static array of progress values is used:  
  `[0, 5, 10, 20, 35, 50, 75, 100]`.

- **Animated Transitions**  
  Bars animate from 0 to their respective progress value with a smooth transition using `useState` and `useEffect`.

- **Delayed Animation Start**  
  Animation begins after a short delay (`100ms`) to simulate a loading effect.

- **Responsive Layout**  
  Full-screen, mobile-friendly layout using Tailwind utility classes.

- **Styled UI with TailwindCSS**  
  Each bar is styled with:
  - Blue background
  - Rounded corners
  - Drop shadow
  - White percentage text aligned to the right

- **Accessibility (a11y)**  
  Semantic and accessible markup:
  - `role="progressbar"`
  - `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
  
# Install Firebase
    - npm install firebase
    - Configure the firebase from documment 