import React from 'react';
import Banner from '../banner/Banner';
import request from '../request';
import Row from './Row';
import Home_nav from './Home_nav';
import { auth } from '../firebase';


function Home({ text, setText,id}) {


 const [loading, setLoading] = React.useState(false);
 console.log(id);
 return <>
  <div className="loading_screen" style={loading ? { display: 'block' } : { display: 'none' }}>
   <div className="loader" ></div>
  </div>
  <div className="Home_page" style={!loading ? { display: 'block' } : { display: 'none' }}>
   <Home_nav text={text} setText={setText} />
   <Banner></Banner>
   <Row title="Top Trending" fetchurl={request.fetchTrending} setLoading={setLoading} id={id} />
   <Row title="Top Rated" fetchurl={request.fetchToprated} setLoading={setLoading} id={id} />
   <Row title="Action Movies" fetchurl={request.fetchAction} setLoading={setLoading} id={id}/>
   <Row title="Comedy Movies" fetchurl={request.fetchComedy} setLoading={setLoading} id={id}/>
   <Row title="Fantasy Movies" fetchurl={request.fetchFantasy} setLoading={setLoading} id={id}/>
   <Row title="Horror Movies" fetchurl={request.fetchHorror} setLoading={setLoading} id={id}/>
   <Row title="Romace Movies" fetchurl={request.fetchRomance} setLoading={setLoading} id={id}/>
  </div>
 </>
}

export default Home;