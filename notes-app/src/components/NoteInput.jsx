import React from 'react'

function NoteInput( { input, category, handleInput, handleCategory, onSubmit }){
    return(
        <form onSubmit={onSubmit} className="m-5">
            <input
                placeholder="Enter new note"
                type="text"
                value={input}
                onChange={handleInput}
                ></input>
            <select className="ml-5" value={category} onChange={handleCategory}>
                <option value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Ideas">Ideas</option>
                <option value="Other">Other</option>
            </select>
            <button className="px-3 py-1 rounded-full border bg-blue-500 text-white">Submit</button>
        </form>

    )
}
export default NoteInput;