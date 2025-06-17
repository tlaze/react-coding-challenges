# 🧪 React Notes App Challenge

**Challenge Type:** Frontend Coding Challenge  
**Role Level:** Junior React Developer  
**Time Estimate:** 2–3 hours

---

## 🎯 Objective

Build a **Notes App** that allows users to create categorized notes, filter them by category, and delete them. This challenge assesses your ability to write modular, functional React code, manage local state, and build an intuitive UI.

---

## ✅ Features to Implement

### 1. Add a Note
- User can enter text
- User can select a category (Work, Personal, Ideas, Other)
- Clicking **Add** adds the note to the list

### 2. Display Notes
- Notes appear below the input form
- Each note displays:
  - Its text
  - Its category

### 3. Filter Notes
- Provide buttons or a dropdown for:
  - All
  - Work
  - Personal
  - Ideas
  - Other
- Only notes in the selected category should display

### 4. Delete Notes
- Each note should have a delete button
- Clicking it removes the note from the list

---

## 💡 Bonus (Optional)

- Color-code notes by category

---

## ⚙️ Technical Requirements

- React functional components
- State managed with `useState` (and optionally `useEffect`)
- Components should be modular and reusable:
  - `NoteInput`
  - `NoteItem`
  - `CategoryFilter`
- Use any styling method (CSS, Tailwind, etc.)