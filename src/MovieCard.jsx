import React from 'react'

const MovieCard = ({movie}) => {
return (
    <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            {/* N/A is returned by the API when not movie is found */}
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title} />
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
</div>
)
}

export default MovieCard