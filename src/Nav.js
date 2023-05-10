import React, {useEffect, useState} from 'react';
import './Nav.css';
import logo from './assets/MoviesZoneLogo.png';
import avatar from './assets/Netflix-avatar.png';


function Nav() {
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
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>

        </div>
        <img className='nav__logo' src={logo} alt='logo' />
        <img className='nav__avatar' src={avatar} alt='avatar' />

    </div>
  )
}

export default Nav