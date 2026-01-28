import { useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";

function App() {

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  })

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [editingNote, setEditingNote] = useState(null);
  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function addNote(title, content) {
    if (!title.trim() || !content.trim()) return;
    const newNote = {
      id: Date.now(),
      title,
      content
    }

    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {

    //block delete while editing
    if (editingNote) {
      alert("Please finish editing or cancel edit before deleting a note.");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this note?");

    if (!confirmDelete) return;

    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  }

  function updateNote(id, title, content) {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, title, content } : note
    );
    setNotes(updatedNotes);
    setEditingNote(null);
  }

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchText.toLowerCase()) ||
    note.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="app-container">
        <div className="header">
          <h1>React Notes App</h1>
          <div className="header-right">
            <span className="note-count">Total 📝: {notes.length}</span>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}>{darkMode ? "🌞 Light" : "🌙 Dark"}</button>
          </div>
        </div>
        <NoteInput addNote={addNote} updateNote={updateNote} editingNote={editingNote} setEditingNote={setEditingNote} />
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <NotesList notes={filteredNotes} deleteNote={deleteNote} setEditingNote={setEditingNote} />
      </div></div>
  );
}

export default App;