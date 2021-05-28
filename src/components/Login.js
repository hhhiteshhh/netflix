import React, { useState } from "react";
import "../Css/Login.css";
import SignUp from "./SignUp";
function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button className="login__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {!signIn ? (
          <>
            <h1>Unlimited films,TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="login__input">
              <form>
                <input placeholder="Enter your email" type="email"></input>
                <button
                  className="login__input__button"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        ) : (
          <SignUp />
        )}
      </div>
    </div>
  );
}

export default Login;
