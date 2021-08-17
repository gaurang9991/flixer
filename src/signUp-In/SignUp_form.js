import React from 'react';
import "./signUp_form.css";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {auth} from "../firebase";
//import { db } from './firebase';

const SignUP_form = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState("");
  const [userCreated, setUserCreated] = React.useState(false);
  const [border, setBorder] = React.useState(false);




  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName && password && confirm === password) {
      auth.createUserWithEmailAndPassword(userName,password).then(cred =>
        {
         // console.log(auth.currentUser.uid);
          //db.collection(auth.currentUser.uid).add({title:"hello"});
          setUserCreated(true);
          
        }).catch(error =>{
            alert(error.message);
        });
    }
    else
    {
      setBorder(true);
    }
          

  }





  return !userCreated ? <>
    <div className="Container_SignUp_Form">
      <Link to="/"><div className="net-logo">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" />
      </div></Link>
      <div className="SignUp_form">
        <form onSubmit={handleSubmit}>
          <h2 className="sign_title">Sign Up</h2>
          <h3 className="status" style={border ? { display: "block" } : { display: "none" }}>Error</h3>
          <input type="text" className="username" placeholder="username"
            onChange={(e) => setUserName(e.target.value)} style={border ? { border: "1px solid red" } : { border: "none" }}></input>
          <input type="password" className="password" placeholder="password"
            onChange={(e) => setPassword(e.target.value)} style={border ? { border: "1px solid red" } : { border: "none" }} />
          <input type="password" className="confirm_password" placeholder="confirm password"
            onChange={(e) => setConfirm(e.target.value)} style={border ? { border: "1px solid red" } : { border: "none" }} />
          <button type="submit" className="signIn_button">Sign In</button>
        </form>
      </div>
    </div></> : (<Redirect to="/home" />)
}


export default SignUP_form;