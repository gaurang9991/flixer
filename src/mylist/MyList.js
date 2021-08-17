import React from "react";
import Home_nav from "../home/Home_nav";
import { auth } from "../firebase";
import { db } from "../firebase";
import MovieCard_l from "./MovieCard_l";
import "./MyList.css";
const Mylist = ({id}) =>
{

 const [movies, setMovies] = React.useState([]);
 const [loading, setLoading] = React.useState(false);

var data=[];
 const getMovies = async () => {
  
  console.log(id);
  await db.collection(id).get().then(snapshot=>{
   
   snapshot.docs.forEach(doc=>{
     data.push(doc.data());
   })
  }) 
  console.log(data);
  setMovies(data);
  setLoading(false);
 };

React.useEffect(async () => {
   getMovies();
   setLoading(true);
 },[]);

return (!loading ? 
 <><Home_nav/><h2 className="search_name">{"My List"}</h2>
   <div className="searched_movies">
        {
          movies.map((movie) => {
            console.log(movie);
            return <MovieCard_l key={movie.id} movie={movie} movies={movies} setMovies={setMovies}  id={id}/>
          })
        }
     </div></>
     :<div className="loading_screen" style={loading ? { display: 'block' } : { display: 'none' }}>
   <div className="loader"></div>
  </div>
)
}

export default Mylist;