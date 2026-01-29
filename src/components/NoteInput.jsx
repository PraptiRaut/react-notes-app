import { useState, useEffect } from "react";

function NoteInput({ addNote, editingNote, updateNote, setEditingNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");


    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    }

    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title);
            setContent(editingNote.content);
        } else {
            setTitle("");
            setContent("");
        }
    }, [editingNote]);

    function handleSubmit() {
        if (!title.trim() || !content.trim()) {
            setError("Please enter both title and content");
            return
        };

        //clear previous error
        setError("");

        if (editingNote) {
            updateNote(editingNote.id, title, content);
        } else {
            addNote(title, content);
        }

        setTitle("");
        setContent("");
    }

    function handleCancel() {
        setEditingNote(null);
    }

    return (
        <div className="note-input">
            <input type="text" value={title} placeholder="Title" onChange={(e) => {
                setTitle(e.target.value);
                setError("");
            }} onKeyDown={handleKeyDown} required />
            <textarea placeholder="Content" value={content} onChange={(e) => {
                setContent(e.target.value);
                setError("");
            }} onKeyDown={handleKeyDown} required></textarea>
            <button className="primary" onClick={handleSubmit}>
                {editingNote ? "Update Note" : "Add Note"}</button>

            {editingNote && (
                <button className="secondary" onClick={handleCancel}>Cancel</button>
            )}
            {error && <p className="error-text">{error}</p>}
        </div>
    );
}

export default NoteInput;