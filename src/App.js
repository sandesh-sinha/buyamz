import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
function App() {
  return (
    <Router>
        <div className="app">
            <Header/>
          <Switch>
            <Route exact path='/' >
              <Home/>
            </Route>
            <Route exact path='/checkout'>
              <Checkout/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
