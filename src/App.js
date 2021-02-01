import React , { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51HgP5BFnxuBtdAsJETK3HCRUjpWMrlDzE9pF27mpTROMQMYcNtXTfhfhjqE4wp88pi5EIRt1XDgU7NUjZ9Xi3JFM00pSHarohO");


function App() {
 const [{}, dispatch] = useStateValue(); 
  
  useEffect(() => {

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS ...', authUser);


      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser 
        })

      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])



  return (
    //BEM Convention

    <Router>
           <div className="app">

          <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
              <Header />
              <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
           </Switch>
        </div>
    </Router>

  );
}

export default App;