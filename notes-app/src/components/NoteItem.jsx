import React from 'react'

function NoteItem({ note }){
    return(
        <li key={note.id}>
            {note.text}
        </li>
    )
}
export default NoteItem;