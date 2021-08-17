import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Navbar = () => {
 return (<>
  <div className="navbar">
   <div id="img">
    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" />
   </div>
   <Link to="/SignIn"><div className="btn1">Sign In</div></Link>
  </div>
 </>)

}

export default Navbar;