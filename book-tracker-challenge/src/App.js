import './App.css';
import BookCard from './components/BookCard';
import ProgressBar from './components/ProgressBar';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import {useState, useEffect} from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetches book data from api. Sets book state to api data
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

  // Simple function to console the books after updates to state
  useEffect(()=>{
    console.log(books)
    console.log(searchInput)
  },[books])

  // Each time books or search input changes the books get filtered based on the
  // search input
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <div className="App">
      <SearchBar
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {isLoading ? (
        <p>Loading books...</p>
      ): error ? (
        <p>{error}</p>
      ): filteredBooks.length > 0 ? (
        filteredBooks.map(book =>
          <BookCard
            key={book.id}
            author={book.author_name}
            title={book.title}
            year_published={book.first_publish_year}
            />
        )
      ): (
        <p>No books found</p>
      )}

      <ProgressBar/>
      <FilterBar/>
    </div>
  );
}

export default App;
