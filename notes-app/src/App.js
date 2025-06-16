import './App.css';
import NoteInput from './components/NoteInput';
import NoteItem from './components/NoteItem';
import CategoryFilter from './components/CategoryFilter';

function App() {
  return (
    <div className="App">
      <NoteInput></NoteInput>
      <NoteItem></NoteItem>
      <CategoryFilter></CategoryFilter>
    </div>
  );
}

export default App;
