import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51LpvNRSIS9o0xCxwkyXNlJkWrKugJY4rwRY583iPJpKTJn7xokZlWA2jIDtIagPGhprzbYqGuGAHHTNPUInJVPal00HRGvn9ft");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {     // if statement for react - actually a listener that tracks which user is logged in
    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        // user already logged in or just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
