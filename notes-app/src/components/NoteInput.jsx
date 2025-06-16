import React from 'react'

function NoteInput( { text, handleInput, onSubmit }){
    return(
        <form onSubmit={onSubmit}>
            <input
                placeholder="Enter new note"
                text="text"
                value={text}
                onChange={handleInput}
                ></input>
            <button>Submit</button>
        </form>
    )
}
export default NoteInput;