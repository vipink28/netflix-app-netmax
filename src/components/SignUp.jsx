import React from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRef } from "react";

function SignUp(props) {
  const email = useRef(null);
  const password = useRef(null);

  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + "," + errorMessage);
      });
  };
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center">
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

        <button onClick={createUser}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
