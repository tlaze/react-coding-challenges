import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return(
        <li key={todo.id}>
        <span style={{textDecoration: todo.completed? 'line-through' : 'none'}}>
            {todo.text}
        </span>
        <button onClick={() => toggleComplete(todo.id)}>Complete</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}
export default TodoItem;