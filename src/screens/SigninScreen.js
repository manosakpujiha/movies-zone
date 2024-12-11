import React, { useState, useRef } from 'react';
// import { useNavigate } from "react-router-dom";
import "./SigninScreen.css";
import {auth} from "../firebase";
import {signInWithEmailAndPassword } from 'firebase/auth';

function SigninScreen({changeScreen}) {
  // const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  function handleClick() {
    // console.log('switched to signup');
    changeScreen(2)
  }

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const login = async (event) => {
    event.preventDefault();
    // console.log (1, emailRef.current.value, passwordRef.current.value)
    // console.log (2, email, password);
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then( (user) => console.log(`you are signed in as ${user.user.email}`, user))
    .catch( (error) => {
      // console.log(error.message);
      alert(error.message);
    }
    )
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          ref={emailRef}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          ref={passwordRef}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <button type='submit' onClick={login}>SignIn</button>
        <h4> 
            <span className='signupScreen__gray'>New to Movies Zone?</span>
            <span className='signupScreen__link' 
                onClick={handleClick}
                >Sign Up now.
            </span>
        </h4>
      </form> 
    </div>
  );
}

export default SigninScreen;