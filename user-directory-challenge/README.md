# 📇 React User Directory

A searchable user directory built with React. This app fetches user data from an external API and allows users to filter the results in real-time using a search bar. The project demonstrates best practices in component-based architecture, hooks, and conditional rendering.

---

## 🚀 Features

- ✅ Fetches user data from a public API
- ✅ Displays user information (name, email, city)
- ✅ Real-time search filtering by user name
- ✅ Component-based architecture with reusable UI
- ✅ Error and loading state handling


## 🛠️ Technologies Used

- **React** – Functional components & hooks (`useEffect`, `useState`)
- **JavaScript (ES6)** – Array methods, arrow functions, destructuring
- **CSS** – Basic styling for card components
- **JSONPlaceholder API** – Mock user data source

---

## 📁 File Structure

src/
├── App.js # Main logic and state management
├── components/
│ ├── SearchBar.jsx # Search input component
│ └── UserCard.jsx # Individual user display card
└── App.css # Styling for layout and cards


---

## ✍️ How to Use

1. App loads and displays 10 mock users from the JSONPlaceholder API
2. Type a name into the search bar
3. The directory updates in real time to show matching results

---

## 🧠 What I Learned

- How to fetch data asynchronously using `useEffect`
- How to manage loading and error states
- How to pass and handle props between components
- How to use `.filter()` to create dynamic, real-time UIs