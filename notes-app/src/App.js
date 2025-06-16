import './App.css';
import {useState} from 'react';
import NoteInput from './components/NoteInput';
import NoteItem from './components/NoteItem';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(input.trim() === '' || category === '') return
    
    const newNote = {
      id: Date.now(),
      text: input,
      category
    }

    setNotes([...notes, newNote])
    setInput('')
    setCategory('')
    console.log(input)
    console.log(category)
  }
  return (
    <div className="App">
      <NoteInput
        input={input}
        category={category}
        handleInput={handleInput}
        handleCategory={handleCategory}
        onSubmit={onSubmit}  
      />
      <ul>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
          />
        ))}
      </ul>
      <CategoryFilter></CategoryFilter>
    </div>
  );
}

export default App;
