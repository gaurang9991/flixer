import React from 'react';
import "./signin.css";
import { Link } from 'react-router-dom';
import {auth} from "../firebase";

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const Sign_form = ({setId}) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userFound, setUserFound] = React.useState(false);
  const [border, setBorder] = React.useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName && password)
    {
      auth.signInWithEmailAndPassword(userName,password).then(cred =>{
        setUserFound(true);
        setId(cred.user.uid);
        console.log(cred);
      }).catch(Error=>{
        setBorder(true);
      })
    }
     
  }
  return !userFound ? <>
    <div className="Container_SignIn_Form">
      <Link to="/"><div className="net-logo">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" />
      </div></Link>
      <div className="SignIn_form">
        <form onSubmit={handleSubmit}>
          <h2 className="sign_title">Sign In</h2>
          <h3 className="status" style={border ? { display: "block" } : { display: "none" }}>No user found</h3>
          <input type="text" className="username" placeholder="username"
            onChange={(e) => setUserName(e.target.value)} style={border ? { border: "1px solid red" } : { border: "none" }}></input>
          <input type="password" className="password" placeholder="password"
            onChange={(e) => setPassword(e.target.value)} style={border ? { border: "1px solid red" } : { border: "none" }} />
          <button type="submit" className="signIn_button">Sign In</button>
        </form>
        <h3 className="newAccount">New to netflix? <Link to="/SignUp" className="signUp_link"><p>Sign up now</p></Link></h3>
      </div>
    </div></> : (<Redirect to="/home" />)
}

export default Sign_form
