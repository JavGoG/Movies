import './App.css';
import { useEffect } from 'react';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d39fd0c0"

function App() {

  // Front-End connects with Back-End API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    // The API has got the Search property field
    // which holds the values of our API request
    console.log(data.Search);

  }
  // searchMovies are called once when the page is loaded
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
