import React, { useRef } from "react";
import { useHistory } from "react-router";
import "../Css/SignUp.css";
import { auth } from "../firebase";
function SignUp() {
  const emailRef = useRef(null);
  const passwordlRef = useRef(null);
  const history = useHistory();
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordlRef.current.value
      )
      .then((authUser) => {
        alert("Sign in to continue");
      })
      .catch((e) => alert(e.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordlRef.current.value
      )
      .then((authUser) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordlRef} />
        <button type="submit" onClick={signIn}>
          SignIn
        </button>
        <h4>
          New to Netflix?<span onClick={register}>Sign up now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
