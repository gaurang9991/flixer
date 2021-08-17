import React from 'react';
import Landing from './landing/landng';
import Home from './home/netfix-home';
import Search from './search/Search';
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import Sign_form from './signUp-In/Sign_form';
import SignUP_form from './signUp-In/SignUp_form';
import Mylist from './mylist/MyList';


function App() {
  
  const [id,setId] = React.useState(""); 
  const [text, setText] = React.useState("");
  return <div className="app">
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/home'>
          <Home text={text} setText={setText} id={id}/>
        </Route>
        <Route path="/search">
          <Search text={text} setText={setText}></Search>
        </Route>
        <Route path='/SignIn'>
          <Sign_form setId={setId}></Sign_form>
        </Route>
        <Route path='/SignUp'>
          <SignUP_form></SignUP_form>
        </Route>
        <Route path='/MyList'>
          <Mylist id={id}></Mylist>
        </Route>
      </Switch>
    </Router>
  </div>

}

export default App;
