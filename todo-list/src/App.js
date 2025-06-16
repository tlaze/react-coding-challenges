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
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
