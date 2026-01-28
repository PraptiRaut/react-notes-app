function NotesList({ notes, deleteNote, setEditingNote }) {

    if (notes.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: "20px", color: "#777" }}>
                <h3>No notes found 📝</h3>
                <p>Try adding a new note or change your search.</p>
            </div>
        );
    }

    return (
        <div className="notes-list">
            {notes.map(note => (
                <div className="note-card" key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <div className="note-actions">
                        <button className="edit" onClick={() => setEditingNote(note)}>Edit</button>
                        <button className="delete" onClick={() => deleteNote(note.id)}>Delete</button>
                    </div>

                </div>
            ))}
        </div>
    );

}

export default NotesList;