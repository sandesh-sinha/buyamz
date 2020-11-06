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
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders'

const promise = loadStripe("pk_test_51HkDcBIRbyCvMF3pIq2obPQ6Osd8eDEcpGNFF7O9NdP3pALe71VNoMLinCZBuDLr2XKHVKN0kM94zy0JZTXjLZ1V00Qqtkrc22");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
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
            <Route exact path='/orders'>
              <Header />
              <Orders/>
            </Route>
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
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
