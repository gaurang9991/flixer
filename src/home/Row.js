import React from 'react'
import MovieCard from './MovieCard';

const Row = ({ title, fetchurl, setLoading,id}) => {
 const [movies, setMovies] = React.useState([]);
 const getMovies = async () => {
  const response = await fetch(fetchurl);
  const users = await response.json();
  setMovies(users.results);
  setTimeout(() => setLoading(false), 1000);
 };

 React.useEffect(async () => {
  getMovies();
  setLoading(true);
  return () => {
  }
 }, []);

 return (
  <>
   <div className="row-title">
    <h2>{title}</h2>
   </div>
   <div className="movie-cards">
    {
     movies.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} id={id} />
     })
    }
   </div>
  </>
 )
}

export default Row
