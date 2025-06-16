import React from 'react'

function NoteInput( { text, category, handleInput, handleCategory, onSubmit }){
    return(
        <form onSubmit={onSubmit}>
            <input
                placeholder="Enter new note"
                text="text"
                value={text}
                onChange={handleInput}
                ></input>
            <select value={category} onChange={handleCategory}>
                <option value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Ideas">Ideas</option>
                <option value="Other">Other</option>
            </select>
            <button>Submit</button>
        </form>

    )
}
export default NoteInput;