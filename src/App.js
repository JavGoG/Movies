import './App.css';
import { useEffect } from 'react';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d39fd0c0"

// key d39fd0c0
function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data);

  }
  useEffect(() => {
    searchMovies('The Godfather');
  }, [])

  return (
    <div className="App">
      <h1>Movies</h1>
    </div>
  );
}

export default App;
