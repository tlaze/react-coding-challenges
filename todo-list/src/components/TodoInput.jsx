import React from 'react';

function TodoInput({ text, handleInputChange, onSubmit }) {
    return(
        <form onSubmit={onSubmit}>
            <input
                placeholder="Add Todo"
                type="text"
                value={text}
                onChange={handleInputChange}
            />
            <button>Submit</button>
      </form>
    )
}
export default TodoInput;