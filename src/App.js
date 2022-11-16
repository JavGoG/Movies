import './App.css';
import { useEffect } from 'react';
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d39fd0c0";


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
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
        />
      </div>
    </div>
  );
}

export default App;
