import React from "react";
import { auth } from "../firebase";
import { useRef } from "react";

function SignUp(props) {
  const email = useRef(null);
  const password = useRef(null);

  const signUp = () => {
    auth     
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + "," + errorMessage)
      });
  };
  return (
    <div className="container">
      <form>
        <input
          className="form-control"
          ref={email}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="form-control"
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
        />

        <button onClick={signUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
