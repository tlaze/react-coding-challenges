import React from 'react'

function NoteItem({ note, deleteNote }){
    const categoryColors = {
        Work: 'bg-blue-100 border-blue-500 text-blue-800',
        Personal: 'bg-pink-100 border-pink-500 text-pink-800',
        Ideas: 'bg-yellow-100 border-yellow-500 text-yellow-800',
        Other: 'bg-gray-100 border-gray-500 text-gray-800',
    };

    const categoryClass = categoryColors[note.category] || 'bg-white';
    return(
        <div
            className={`border-l-4 p-4 my-2 rounded shadow ${categoryClass}`}
            key={note.id}
            >
            <h3 className="text-lg font-semibold">{note.text}</h3>
            <p className="text-sm italic">{note.category}</p>
            <button 
                className="text-red-500 hover:underline mt-1 text-2m"
                onClick={() => deleteNote(note.id)}>
                Delete
            </button>
        </div>
    )
}
export default NoteItem;