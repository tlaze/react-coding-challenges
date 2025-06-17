import './App.css';
import {useState, useEffect} from 'react';
import FilterBar from './components/FilterBar';
import PetCard from './components/PetCard';

function App() {
  const [pets, setPets] = useState([])
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchPets = async () => {
      try{
        //Had to use a different api service. Previous one is out of date
        const response = await fetch("https://dogapi.dog/api/v2/breeds");
        const data = await response.json();
        setPets(data.data.map(pet => ({
          ...pet,
          adopted:false
        })))
        console.log(data.data)
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

  const filteredPets = pets.filter(pet => 
    pet.attributes.name.toLowerCase().includes(input.toLowerCase())
  )

  const adopt = (id) => {
    const updatedPets = pets.map(pet =>
      pet.id === id ? { ...pet, adopted:true} : pet 
    );
    setPets(updatedPets)
  }
  return (
    <div className="App">
      <FilterBar
        value={input}
        onInputChange={(e) => setInput(e.target.value)}
      />
      {isLoading ? (
          <p>Loading Pets...</p>
        ) : error ? (
          <p>{error}</p>
        ) : filteredPets.length > 0 ? (
          filteredPets.map(pet => (
            <PetCard
              key={pet.id}
              breed={pet.attributes.name}
              description={pet.attributes.description}
              age={pet.attributes.life.min}
              adopted={pet.adopted}
              onAdopt={adopt}
            />
          ))
        ) : (
          <p>No Pets Found</p>
      )}
    </div>
  );
}

export default App;
