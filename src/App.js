import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login.js'
import Explore from './explore.js'


const App = () => {
  if(window.location.pathname !== "/explore")
  {
    document.getElementById('mapid').style.display = "none";
  }

  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/explore" component={Explore} />
        </Switch>
      </Router> 
  );
}

const Home = () => {
  
  return(
      <div className="App">
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <a href="/">Login</a>
        <a href="/explore">Explore</a>
      </div>
  )
}

export default App;
