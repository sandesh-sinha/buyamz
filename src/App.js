import React , {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ' , authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user : authUser,
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user : null
        })
      }
    })
  }, [])
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
            <Route exact path='/payment'>
              <Header/>
              <Payment/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
