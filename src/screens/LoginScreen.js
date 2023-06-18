import React, { useState } from 'react';
import './LoginScreen.css';
import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';
import Logo from '../assets/MoviesZoneLogo.png';
import LandingPage from './LandingPage';

function LoginScreen() {
  const [signIn, setSignIn] = useState(0);
  const changeScreen = (id) => {
    setSignIn(id)
  }
  const loginscreenBody = () => {
      if (signIn === 1) {
       return <SigninScreen changeScreen={changeScreen} />
      } else if (signIn === 2) {
        return <SignupScreen changeScreen={changeScreen}/>
      } else {
        return <LandingPage changeScreen={changeScreen}/>
      }
  }
  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
          <img className='loginScreen__logo' onClick={() => setSignIn(0)} src={Logo} alt='movies zone logo'></img>
          <div className='loginScreen__gradient'></div>
        </div>
        <div className='loginScreen__body'>
          { loginscreenBody()}
        </div>
    </div>
  )
}
export default LoginScreen