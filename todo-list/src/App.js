import './App.css';
import {useState} from 'react';

function App() {
  const [toDo, setTodo] = useState([]);
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }
  return (
    <div className="App">
      <form>
        <input
          placeholder="Add Todo"
          type="text"
          value={text}
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
