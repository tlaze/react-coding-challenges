import './App.css';
import {useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

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
      <TodoInput
        text={text}
        handleInputChange={handleInputChange}
        onSubmit={handleSubmit}/>
      <ul>
        {toDo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
