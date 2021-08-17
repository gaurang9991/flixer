import React from 'react'
import request from '../request';
import "./banner.css";
import { Link } from 'react-router-dom';
const Banner = () => {

 const [movie, setMovie] = React.useState([]);
 const fetchurl = request.fetchPopular;

 const getMovies = async () => {
  const response = await fetch(fetchurl);
  const users = await response.json();
  setMovie(users.results[randomnum]);
 }

 const backgroundurl = "https://image.tmdb.org/t/p/original/" + movie?.backdrop_path;

 const randomnum = Math?.floor(Math.random() * 19);

 React.useEffect(async () => {
  getMovies();
  return () => {
  }
 }, []);

 return <>
  <header className="banner"
   style={{
    backgroundImage: "url('" + backgroundurl + "')",
   }}>
   <div className="banner_contents">
    <h1 className="banner_title">
     {movie?.title || movie?.name || movie?.original_name}
    </h1>
    <div className="banner_buttons">
     <button className="banner_button">Play</button>
     <Link to='/MyList'><button className="banner_button">My List</button></Link>
    </div>
    <h1 className="banner_description">{movie.overview?.substring(0, 300) + "..."}</h1>
   </div>
   <div className="banner_fade">
   </div>
  </header>
 </>
}

export default Banner
