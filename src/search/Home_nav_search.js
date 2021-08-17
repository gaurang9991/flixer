import React, { useContext } from 'react';
import "../home/home-nav.css";
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
var time = [0, 1];
const Home_nav = ({ alreadytext, setSearch, setText }) => {
  const [show, setShow] = React.useState(false);
  const [prevText, setPrevText] = React.useState(alreadytext);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShow(true);
      }
      else {
        setShow(false);
      }

    }, [])
  }
  )
  return (
    show ? <DynamicNav setText={setText} show={show} setShow={setShow} setSearch={setSearch} prevText={prevText} setPrevText={setPrevText} alreadytext={alreadytext} /> : <StaticNav setText={setText} show={show} setShow={setShow} setSearch={setSearch} prevText={prevText} setPrevText={setPrevText} alreadytext={alreadytext} />)


}

export default Home_nav



const StaticNav = ({ setText, show, setShow, setSearch, prevText, setPrevText, alreadytext }) => {

  const next_search = (e) => {
    setPrevText(e.target.value);
    time[0] = (setTimeout(() => setSearch(e.target.value), 1000));
    console.log(time[1]);
    console.log(clearTimeout(time[1]), time[1]);
    time[1] = time[0];
  }


  return (<div className="home_navbar">
    <div className="net-logo">
      <Link to="/home"> <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" /></Link>
    </div>
    <div className="search_bar">
      <input type="text"
        value={prevText}
        onInput={(e) => next_search(e)} />
      <div className="seacrh_icon" to="/search/" onClick={() => { setSearch(prevText) }}><IoSearch id="search_icon" /></div>
    </div>
    <div className="account_dropdown">
      <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="account" />
    </div>
  </div>)

}


const DynamicNav = ({ setText, show, setShow, setSearch, prevText, setPrevText, alreadytext }) => {
  const next_search = (e) => {
    setPrevText(e.target.value);
    time[0] = (setTimeout(() => setSearch(e.target.value), 1000));
    console.log(time[1]);
    console.log(clearTimeout(time[1]), time[1]);
    time[1] = time[0];
  }
  return (<div className="home_navbar" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
    <div className="net-logo">
      <Link to="/home"> <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" /></Link>
    </div>
    <div className="search_bar">
      <input type="text"
        value={prevText}
        onInput={(e) => next_search(e)}
      />
      <div className="seacrh_icon" to="/search/" onClick={() => setSearch(prevText)}><IoSearch id="search_icon" /></div>
    </div>
    <div className="account_dropdown">
      <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="account" />
    </div>
  </div>)

}