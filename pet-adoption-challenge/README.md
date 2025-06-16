# 🐾 Pet Adoption Dashboard - React Coding Challenge

Welcome to the **Pet Adoption Dashboard** coding challenge! This project tests your ability to build a dynamic React application using `useState`, `useEffect`, component architecture, and filtering logic.

---

## 📋 Objective

Build a user-friendly dashboard where users can:
- View a list of pets
- Filter by type
- Mark pets as adopted

You’ll fetch real pet data from a public API and use React best practices throughout.

---

## 🚀 Requirements

### ✅ Core Features

1. **Fetch Pet Data**
   - Use `useEffect` to fetch data from this API on load:
     ```
     https://freetestapi.com/api/v1/pets
     ```

2. **Display Pets**
   - Show:
     - Pet name
     - Type (e.g., Dog, Cat, Rabbit)
     - Age
     - Adoption status

3. **Filter by Type**
   - Allow users to filter pets by category:
     - All
     - Dog
     - Cat
     - Rabbit

4. **Mark as Adopted**
   - Each pet should include an “Adopt” button
   - Clicking it updates the adoption status in the UI

5. **State Management**
   - Use `useState` to manage:
     - Pets list
     - Selected filter
     - Adoption status

---

## 💡 Bonus Features (Optional)

- Persist adoption state with `localStorage` using `useEffect`
- Show the number of adopted vs available pets
- Add search functionality by name
- Responsive styling with Tailwind CSS or your own design