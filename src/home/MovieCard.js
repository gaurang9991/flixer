import React from 'react';
import "./MovieCard.css";
import Youtube from "react-youtube";
import trailer from "movie-trailer";
import source from './addimage';
import { auth } from '../firebase';
import { db } from '../firebase';
var time = 0;

const MovieCard = ({ movie,id }) => {
  const [trailerurl, setTrailerurl] = React.useState("");
  const [showTrailer, setShowTrailer] = React.useState(false);


  const starttrailer = () => {
    setShowTrailer(true);
    clearTimeout(time);
  }

  const stoptrailer = () => {
    setShowTrailer(false);
    setTrailerurl("");
    clearTimeout(time);
  }

  const settime = () => {
    time = setTimeout(starttrailer, 2000);

    trailer(movie?.title || movie?.name || movie?.original_name).then((url) => {
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerurl(urlParams.get("v"));
    }).catch((error) => console.log(error));

  }

  const cleartime = () => {
    clearTimeout(time);
    stoptrailer();
  }

  return (!showTrailer ? (<div className="movie-card">
    <img className="movie_poster" src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path
    } alt="NONE" onMouseEnter={() => settime()}
      onMouseLeave={() => { cleartime() }} />
    <h4 className="movie_tilte">{movie?.title || movie?.name || movie?.original_name}</h4>
    <div className="movie-card_fade"></div>
    <div className="mylist_add" onClick={()=>
    {
      console.log(id);
       db.collection(id).doc(movie?.title || movie?.name || movie?.original_name).set(movie);
    }}><img src={source} alt="none" />
    </div>
  </div >) : <Trailer movie={movie} settime={settime} cleartime={cleartime} videoid={trailerurl} />)


}


const Trailer = ({ movie, settime, cleartime, videoid }) => {

  const opts = {
    height: '300',
    width: '350',
    playerVars: { autoplay: 1 },
  }

  return (<div className="movie-card-select" onMouseEnter={() => settime()}
    onMouseLeave={() => { cleartime() }} >
    <Youtube videoId={videoid} opts={opts} ></Youtube>

  </div>)
}

export default MovieCard
