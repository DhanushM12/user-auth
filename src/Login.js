import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import firebase from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const auth = firebase.auth();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        //console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const phone = (e) => {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        let code = prompt("enter the otp", "");
        if (code == null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user, "user");
            document.querySelector("label").textContent =
              result.user.phoneNumber + " Number verified";
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <button className="login__registerButton" onClick={register}>
          Create your Account
        </button>
        <h5>Phone Number</h5>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="login__registerButton" onClick={phone}>
          Phone Verification
        </button>
        <label></label>
      </div>
    </div>
  );
}

export default Login;
