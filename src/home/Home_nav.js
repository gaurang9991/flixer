import React, { useContext } from 'react';
import "./home-nav.css";
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Home_nav = ({ text, setText }) => {
  
  const [show, setShow] = React.useState(false);
  var search = "/search/" + text;
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      }
      else {
        setShow(false);
      }

    }, [])
  }
  )
  return (
    show ? <div className="home_navbar" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="net-logo">
       <Link to="/home"> <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" /></Link>
      </div>
      <div className="search_bar">
        <input type="text"
          placeholder="search"
          value={text}
          onChange={(e) => setText(e.target.value)} />
        <Link to={search} ><IoSearch id="search_icon" /></Link>
      </div>
      <div className="account_dropdown">
        <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="account" />
      </div>
    </div> :
      <div className="home_navbar">
        <div className="net-logo">
         <Link to="/home"><img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" /></Link>
        </div>
        <div className="search_bar">
          <input type="text"
            value={text}
            placeholder="search"
            onChange={(e) => setText(e.target.value)} />

          <Link to={search} ><IoSearch id="search_icon" /></Link>

        </div>
        <div className="account_dropdown">
          <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="account" />
        </div>
      </div>
  )
}

export default Home_nav


/*<div className="search_box">
    <input type="text" />
    <button></button>*/