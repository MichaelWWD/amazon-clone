import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import "./Header.css"
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/">
            <Header/>
            <h1>HomePage</h1>
          </Route>

          <Route path="/checkout" >
            <h1>Checkout page </h1>
          </Route>

          <Route path="/login">

            <h1>Login Page </h1>
          </Route>


        </Switch>
    
    </div>
    </Router>
  );
}

export default App;
