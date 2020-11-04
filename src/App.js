import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/' >
              <Header/>
              <Home/>
            </Route>
            <Route exact path='/checkout'>
              <Header/>
              <Checkout/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
