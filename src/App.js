import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import { initToken } from './redux/action/SignInAction';
import { useDispatch, useSelector } from 'react-redux'
import Setlogs from './components/dashboard/workLogs/Setlogs';
import LogsContainer from './components/dashboard/workLogs/LogsContainer';
function App() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.userReducer.token);
  const Role = sessionStorage.getItem('role')
  const auth = sessionStorage.getItem("logIn")
  const [logIn, setLogin] = useState(auth);
  useEffect(() => {
    dispatch(initToken())

  }, [token]);

  // console.log(logIn)

  let Routes;
  if (token) {
    Routes = (
      <>
        <Header setLogin={setLogin} />
        <Switch>
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route path="/Worklog" component={LogsContainer} />
          <Redirect from='/' to='/Dashboard' />
        </Switch>
      </>
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

        {Routes}
      </div>
    </Router>
  );
}

export default App;