import './App.css';
import {useState} from 'react';
import NoteInput from './components/NoteInput';
import NoteItem from './components/NoteItem';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(input.trim() === '') return
    
    const newNote = {
      id: Date.now(),
      text: input,
    }

    setNotes([...notes, newNote])
    setInput('')
    console.log(input)
  }
  return (
    <div className="App">
      <NoteInput
        input={input}
        handleInput={handleInput}
        onSubmit={onSubmit}  
      />
      <NoteItem></NoteItem>
      <CategoryFilter></CategoryFilter>
    </div>
  );
}

export default App;
