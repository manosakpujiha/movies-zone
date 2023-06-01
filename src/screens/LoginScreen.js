import React, { useEffect, useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';
import Logo from '../assets/MoviesZoneLogo.png';

function LoginScreen() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
      if (window.scrollY > 100) {
          handleShow(true);
      }
      else {
          handleShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', transitionNavBar);
      return () => window.removeEventListener('scroll', transitionNavBar)
  }, []
  )

  const [signIn, setSignIn] = useState(false)
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
          <img className='loginScreen__logo' src={Logo} alt='movies zone logo'></img>
          <button className='loginScreen__button' onClick={() => setSignIn(true)}>Sign In</button>
          <div className='loginScreen__gradient'></div>
        </div>
        <div className='loginScreen__body'>
          {signIn ? (
              <SignupScreen/>
          ) : ( <>
            <h1>
              Unlimited trailers, teasers and more.
            </h1>
            <h2> Your one-stop destination for the latest movie trailers and teasers.</h2>
            <h3> 
              Get ready to embark on an exciting journey through the world of movies.
              Signup now to to become a Movies Zone member and unlock
              a world of captivating movie trailers and teasers. 
              With a Movies Zone account, you can save your favorite movie trailers for later, 
              allowing you to easily revisit and enjoy them whenever you want. Plus, you'll have the power 
              to review and share your thoughts on the trailers you watch, adding your voice to the 
              vibrant movie-loving community. Whether you're a passionate movie 
              enthusiast or a casual viewer looking for something new, Movies Zone has got you covered.
            </h3>
            <div className='loginScreen__input'>
              <form>
                <input 
                  type='email'
                  placeholder='Email Address'
                />
                <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
              </form>
            </div>
          </>)
        }
         
        </div>
    </div>
  )
}

export default LoginScreen