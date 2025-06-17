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
  const [readStatus, setReadStatus] = useState("All")

  // Fetches book data from api. Sets book state to api data
  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await fetch("https://openlibrary.org/search.json?q=javascript");
        const data = await response.json();
        
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

        console.log(storedBooks)

        setBooks(data.docs.map(book=>({
          ...book,
          read: storedBooks.includes((book.key)),
        })))
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
    book.title.toLowerCase().includes(searchInput.toLowerCase()))
    .filter(book => {
      if(readStatus === 'Read') return book.read;
      if(readStatus === 'Not Read') return !book.read;
      return true;
    })

  // When user clicks on not read button it updates to read
  const addToReadList = (id) =>{
    const updatedBooks = books.map(book =>
      book.key === id ? { ...book, read:true} : book
    )
    setBooks(updatedBooks)

    const storedBooks = updatedBooks.filter(book => book.read).map(book => book.key);
    localStorage.setItem("books", JSON.stringify(storedBooks))
  }

  return (
    <div className="App">
      <SearchBar
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <FilterBar
      currentReadStatus={readStatus}
      handleReadStatus={setReadStatus}
      />
      <ProgressBar
        total={filteredBooks.length}
        readCount={filteredBooks.filter(book=> book.read).length}
      />

      {isLoading ? (
        <p>Loading books...</p>
      ): error ? (
        <p>{error}</p>
      ): filteredBooks.length > 0 ? (
        filteredBooks.map(book =>
          <BookCard
            key={book.key}
            id={book.key}
            author={book.author_name}
            title={book.title}
            year_published={book.first_publish_year}
            read={book.read}
            onRead={addToReadList}
            />
        )
      ): (
        <p>No books found</p>
      )}
    </div>
  );
}

export default App;
