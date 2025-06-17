import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [pets, setPets] = useState([])
  const [petType, setPetType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchPets = async () => {
      try{
        const response = await fetch("https://dogapi.dog/api/v2/breeds");
        const data = await response.json();
        setPets(data)
        console.log(data)
      }
      catch(err){
        setError("Failed to load pets")
        console.error("error:", err)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchPets()
  },[])
  return (
    <div className="App">
    </div>
  );
}

export default App;
