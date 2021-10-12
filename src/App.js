import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import { initToken } from './redux/action/userAction';
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initToken())
  }, []);
  const token = useSelector((state) => state.userReducer.token);
  const logIN = sessionStorage.getItem("logIn")
  const [logIn, setLogin] = useState(logIN);
  // useEffect(() => {
  //   setLogin(token)
  // }, [])

  console.log(logIn)
  let Routes;
  if (logIn) {
    Routes = (
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    )
  } else {
    Routes = (
      <Switch>
        <Route path="/sign-in" render={() => <SignIn setLogin={setLogin} />} />
        <Route path="/sign-up" render={() => <SignUp setLogin={setLogin} />} />
        <Redirect from='/' to='/sign-in' />
      </Switch>
    )
  }


  return (

    <Router>
      <div className="App">
        <Header setLogin={setLogin} />



        {Routes}

      </div>
    </Router>
  );
}

export default App;