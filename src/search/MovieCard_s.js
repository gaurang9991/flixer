import React from 'react'

const MovieCard_s = ({ movie }) => {

  return (<div className="movie-card">
    <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="NONE" />
    <div className="movie-card_fade"></div>
  </div>
  )

}

export default MovieCard_s
