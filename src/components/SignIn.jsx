import React from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRef } from "react";

function SignIn(props) {

    const email = useRef(null);
    const password = useRef(null);

    const Login = (e)=>{   
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.providerData[0].email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + "," + errorMessage);
  });

}

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
  
          <button onClick={Login}>Sign In</button>
        </form>
      </div>
    );
}

export default SignIn;