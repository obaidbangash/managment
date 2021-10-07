import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Header from './components/header/Header';
function App() {
  return (<Router>
    <div className="App">
      <Header />


      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>

    </div></Router>
  );
}

export default App;