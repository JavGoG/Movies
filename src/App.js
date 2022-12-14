import './App.css';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d39fd0c0";

function App() {
  // We create states for the input user 
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  // Front-End connects with Back-End API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    // The API has got the Search property field
    // which holds the values of our API request
    setMovies(data.Search);
  }

  // searchMovies are called once when the page is loaded -> []
  useEffect(() => {
    searchMovies('The Godfather');
  }, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        {/* Typing the properties in block is easier to read */}
        <input
          placeholder='Search for movies'
          // The value now change dynamically 
          value={searchTerm}
          // e parameter is given for event
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* If there are movie/s print them,
          if not return 'no movies found' */}
      {movies?.length > 0
        ? (
          <div className='container'>
            {/* Mapping an array of children props:
            every child-prop should have a unique key. */}
            {movies.map((movie, key) => (
              <MovieCard key={key} movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
