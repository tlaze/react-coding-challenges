import './App.css';
import {useState} from 'react';

function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(text.trim() === '') return
    console.log("button clicked")

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }

    setTodo([...toDo, newTodo]);
    setText('')
  }
  // If the todo id matches, it will mark the todo as complete.
  const toggleComplete = (id) => {
    const updatedTodos = toDo.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodo(updatedTodos)
  }

  const deleteTodo = (id) => {
    const filteredTodos = toDo.filter(todo => todo.id !== id);
    setTodo(filteredTodos)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add Todo"
          type="text"
          value={text}
          onChange={handleInputChange}
        />
        <button
        >Submit</button>
      </form>
      <ul>
        {toDo.map((todo) => (
          <li key={todo.id}>
            <span style={{textDecoration: todo.completed? 'line-through' : 'none'}}>
              {todo.text}
            </span>
            <button onClick={() => toggleComplete(todo.id)}>Complete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
