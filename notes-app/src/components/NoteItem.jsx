import React from 'react'

function NoteItem({ note, deleteNote }){
    return(
        <li key={note.id}>
            <strong>Category: </strong>{note.category}
            <br></br>
            Note: {note.text}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </li>
    )
}
export default NoteItem;