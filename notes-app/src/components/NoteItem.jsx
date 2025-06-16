import React from 'react'

function NoteItem({ note }){
    return(
        <li key={note.id}>
            <strong>Category: </strong>{note.category}
            <br></br>
            Note: {note.text}
        </li>
    )
}
export default NoteItem;