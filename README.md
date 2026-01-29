# React Notes App
A feature-rich Notes application built using React that allows users to create, edit, delete, search, and manage notes efficiently. The app supports dark mode, localStorage persistence, keyboard shortcuts, and a clean responsive UI.

## Live Demo
👉 Live Website: https://prapti-react-notes-app.netlify.app/

## Features
- Add new notes with title and content
- Edit existing notes
- Delete notes with confirmation popup
- Prevent delete while edit mode is active
- Search notes by title or content
- Dark / Light mode toggle
- Persistent notes using localStorage
- Keyboard shortcut (Enter key to add note)
- Input validation with error feedback
- Responsive and clean UI
- Notes count badge

## Technologies Used
- **Frontend:** React (Vite)
- **State Management:** React Hooks (useState, useEffect)
- **Styling:** CSS
- **Storage:** Browser LocalStorage
- **Deployment:** Netlify
- **Version Control:** Git & GitHub

## Project Structure
react-notes-app/
├── public/
├── src/
| ├── components/
| | ├── NoteInput.jsx
| | ├── NotesList.jsx
| | ├── SearchBar.jsx
| ├── App.jsx
| ├── index.css
| ├── main.jsx
├── .gitignore
├── package-lock.json
├── package.json
├── vite.config.js

## What I Learned
- React component architecture and reusable components
- State lifting and props communication
- Controlled inputs and form validation
- CRUD operations in React
- LocalStorage persistence
- UI state synchronization
- Keyboard event handling
- Git version control workflow
- Project deployment using Netlify

## Installation & Setup
Follow these steps to run the project locally:
### step 1: clone the repository
- git clone https://github.com/PraptiRaut/react-notes-app

### step 2: Go into project folder
- cd react-notes-app

### step 3: Install dependencies
- npm install

### Step 4: Start development server
- npm run dev
- The app will run on : http://Localhost:5173

## Conclusion
This project helped me strengthen my understanding of React state management, component communication, and real-world UI behavior handling. By implementing features like edit protection, persistent storage, and keyboard shortcuts, I gained experience building scalable and user-friendly frontend applications.