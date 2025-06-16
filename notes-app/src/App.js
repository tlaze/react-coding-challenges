import './App.css';
import {useState} from 'react';
import NoteInput from './components/NoteInput';
import NoteItem from './components/NoteItem';
import CategoryFilter from './components/CategoryFilter';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('All');

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
    setCategory('')
    setInput('')
    console.log(input)
    console.log(category)
  }

  const filteredNotes = notes.filter(note => 
    filter === 'All' ? true : note.category === filter
  );

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes)
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
      {filteredNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
      <CategoryFilter currentFilter={filter} handleCategory={setFilter}/>
    </div>
  );
}

export default App;
