import React from 'react';
import Navbar from './landing-navbar';
import './landing.css';

const Landing = () => {
 return (<>
  <div className="container">

   <div className="main-card">
    <Navbar />
    <div className="main-content">
     <h1>Unlimited movies, TV shows and more.</h1>
     <h2>Watch anywhere. Cancel anytime.</h2>
     <h3>Ready to watch? Enter your email to create or restart <br />your membership.</h3>
     <form>
      <input placeholder="Email address"></input>
      <div className="btn">Get Started</div>
     </form>
    </div>
   </div>
  </div>
 </>)

}

export default Landing;