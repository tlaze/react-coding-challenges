import './App.css';
import BookCard from './components/BookCard';
import ProgressBar from './components/ProgressBar';
import FilterBar from './components/FilterBar';
import {useState, useEffect} from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await fetch("https://openlibrary.org/search.json?q=javascript");
        const data = await response.json();;
        setBooks(data.docs)
      }
      catch(err){
        console.error("Error", err)
        setError("Error loading books")
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchData();
  }, [])

  useEffect(()=>{
    console.log(books)
  },[books])
  return (
    <div className="App">

      {isLoading ? (
        <p>Loading...</p>
      ): (
        <p>Loaded</p>
      )}

      <BookCard/>
      <ProgressBar/>
      <FilterBar/>
    </div>
  );
}

export default App;
