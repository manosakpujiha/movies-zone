import React, { useState, useRef } from 'react';
import "./SignupScreen.css";
import {auth} from "../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

function SignupScreen() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const displayNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (event) => {
    event.preventDefault();
    console.log (1, emailRef.current.value, passwordRef.current.value, displayNameRef.current.value)
    console.log (2, email, password, displayName)
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then( (user) => {
        console.log(`you have successfully signed up! as ${user.user.email}`, user);
      updateProfile(auth.currentUser, { displayName: displayName });
    }
    )
    .catch( (error) => {
      console.log(error.message);
      alert(error.message);
    })
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
    //   // Sign up successful
    //   console.log(userCredential);
    // } catch (error) {
    //   // Handle error
    //   alert(error.message);
    // }
  };
  const login = async (event) => {
    event.preventDefault();
    console.log (1, emailRef.current.value, passwordRef.current.value)
    console.log (2, email, password);
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then( (user) => console.log(`you are logge d in as ${user.user.email}`, user))
    .catch( (error) => {
      console.log(error.message);
      alert(error.message);
    }
    )
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input
          type='name'
          ref={displayNameRef}
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
          placeholder="Name"
        />
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
        <button type='submit' onClick={login}>Sign In</button>
        <h4> 
            <span className='signupScreen__gray'>New to Movies Zone?</span>
            <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
          </h4>
      </form> 
    </div>
  );
}

export default SignupScreen;