import React from 'react'

function NoteItem({ note, deleteNote }){
    return(
        <div style={styles.card}
            key={note.id}>
            <strong>Category: </strong>{note.category}
            <br></br>
            Note: {note.text}
            <br></br>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
    )
}

const styles ={
    card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
}
export default NoteItem;