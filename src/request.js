const API_KEY = "33e11dd7ae697e17f1b4f19f887e489c";
const request =
{
 fetchTrending: "https://api.themoviedb.org/3/trending/all/day?api_key=" + API_KEY + "&page=3",

 fetchPopular: "https://api.themoviedb.org/3/movie/popular?api_key=33e11dd7ae697e17f1b4f19f887e489c&language=en-US&page=2",

 fetchToprated: "https://api.themoviedb.org/3/movie/top_rated?api_key=33e11dd7ae697e17f1b4f19f887e489c&page=2",

 fetchAction: 'https://api.themoviedb.org/3/discover/movie?api_key=33e11dd7ae697e17f1b4f19f887e489c&language=en-US&sort_by=popularity.desc&with_genres=28&page=3',

 fetchComedy: 'https://api.themoviedb.org/3/discover/movie?api_key=33e11dd7ae697e17f1b4f19f887e489c&language=en-US&sort_by=popularity.desc&with_genres=35&page=2',

 fetchFantasy: 'https://api.themoviedb.org/3/discover/movie?api_key=33e11dd7ae697e17f1b4f19f887e489c&language=en-US&sort_by=popularity.desc&with_genres=14&page=2',

 fetchHorror: 'https://api.themoviedb.org/3/discover/movie?api_key=33e11dd7ae697e17f1b4f19f887e489c&language=en-US&sort_by=popularity.desc&with_genres=27&page=2',

 fetchRomance: 'https://api.themoviedb.org/3/discover/movie?api_key=33e11dd7ae697e17f1b4f19f887e489c&language=en-US&sort_by=popularity.desc&page=2&with_genres=10749&page=3',



}

export default request;