import React, { useState } from 'react';
import { db } from '../firebase';

const MovieCard_l = ({ movie,movies,setMovies,id }) => {
 const [op,setOp] = React.useState(1);
  var count = 10;
  var fadev;
 const handleRemove = () =>
 {
  db.collection(id).doc(movie?.title || movie?.name || movie?.original_name).delete();
  fadev=setInterval(fade,350);
 }
 
 const fade = ()=>
 {
   if(count<=0)
   {
    const newmovies = movies.filter((thismovies)=> thismovies!=movie)
       setMovies(newmovies);
    clearInterval(fadev);
   }
   count-=3.5;
   setOp(count*0.1);
 }

  return (<div className="movie-card" style={{opacity:op,}}>
    <div className="movie_list">
    <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="NONE" />
    <img className="delete" src="https://p.kindpng.com/picc/s/504-5043069_close-button-png-icon-transparent-png-close-svg.png" alt="none" onClick={handleRemove} />
    </div>
  </div>
  )

}

export default MovieCard_l
