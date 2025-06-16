import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // //Load users via Javascript promises
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUsers(data);
  //       console.log(data);
  //       setIsLoading(false);
  //     })
  //     .catch(err => {
  //       setError('Failed to load users.');
  //       setIsLoading(false)
  //     })
  // }, [])

  //Load users via asyncronous promises (my preference)
  //This useEffect hook will asyncronously fetch users data from the api and set
  //that data into the "users" state variable. Error handling implemented to
  //catch any errors during fetch request.
  useEffect(() => {
    const fetchUsers = async () => {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          console.log(data);
          setUsers(data);
      }
      catch (err) {
        setError('Failed to load users.');
      }
      finally {
        setIsLoading(false);
      }
    }
    fetchUsers()
    },[]);


  return (
    <div className="App">
      <h1>User Directory</h1>
      <p>
        Built with React, this app fetches user data from a public API and displays it in a searchable directory. It uses React hooks like <code>useState</code> and <code>useEffect</code> for state management and data fetching, with components structured for modularity and reusability.
      </p>
    </div>
  );
}

export default App;
