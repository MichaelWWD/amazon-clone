import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {auth} from "./Firebase"
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const login = (event)=>{
        event.preventDefault();// This stops the refresh
        //login logic 
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage 
                history.push("/")
            })
            .catch((e) => alert(e.message) );

    };

    const register = (event)=>{
        event.preventDefault();// This stops the refresh

        //register logic..
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //created a user and logged in , redirect to homepage
                history.push("/")
            })
            .catch((e) => alert(e.message) );

    };



  return (
    <div className ="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign in </h1>
        <form>

          <h5>E-mail</h5>
          <input value={email} onChange={event=> setEmail(event.target.value)} type="email" />

          <h5>Password</h5>
          <input value={password} onChange={event=>setPassword(event.target.value)} type="password" />

          <button type="submit" onClick={login} className="login-signIn-button">
              Sign in
          </button>

        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. 
            Please see our Cookies Notice and our interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login-signUp-button" >
            Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
