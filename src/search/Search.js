import React from 'react';
import MovieCard_s from './MovieCard_s';
import Home_nav_search from './Home_nav_search';
import "./search.css";
const Search = ({ text, setText }) => {
  const [search, setSearch] = React.useState(text);
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const randomnum = Math?.floor(Math.random() * 19);
  const fetchurl = () => {
    if (search === "") {
      return 'https://api.themoviedb.org/3/discover/movie?api_key=33e11dd7ae697e17f1b4f19f887e489c&language=en-US&sort_by=popularity.desc&with_genres=28&page=' + randomnum;
    }
    else {
      return "https://api.themoviedb.org/3/search/movie?api_key=33e11dd7ae697e17f1b4f19f887e489c&language=en-US&query=" + search + "&page=1&include_adult=false";
    }
  }


  const getMovies = async () => {
    const response = await fetch(fetchurl());
    const users = await response.json();
    setMovies(users.results);
    setTimeout(() => setLoading(false), 1500);
  };

  React.useEffect(async () => {
    getMovies();
    setLoading(true);
    setText(search);
    return () => {
    }
  }, [search]);


  return (
    loading ? (<div><Home_nav_search alreadytext={search} setSearch={setSearch} search={search} />
      <div className="loader" setText={setText}></div></div>) :
      (
        search != "" ? <Withsearch movies={movies} text={text} setSearch={setSearch} setText={setText} /> : <WithoutSerach movies={movies} text={text} setSearch={setSearch} search={search} setText={setText} />

      )

  )
}



const Withsearch = ({ movies, text, setSearch, search, setText }) => {
  search = text;
  return <>
    <div>
      <Home_nav_search alreadytext={search} setSearch={setSearch} setText={setText} />
      <h3 className="search_name">{"showing results for " + "'" + search.trim() + "'"}</h3>
      <div className="searched_movies">
        {
          movies?.map((movie) => {
            return <MovieCard_s key={movie.id} movie={movie} />
          })
        }
      </div>
    </div>
  </>
}

const WithoutSerach = ({ movies, text, setSearch, search, setText }) => {
  search = text;
  return <>
    <div>
      <Home_nav_search alreadytext={search} setSearch={setSearch} setText={setText} />
      <div className="searched_movies">
        {
          movies?.map((movie) => {
            return <MovieCard_s key={movie.id} movie={movie} />
          })
        }
      </div>
    </div>
  </>
}

export default Search;

