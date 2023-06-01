import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory, Link } from "react-router-dom";
import './Nav.css';
import logo from './assets/MoviesZoneLogo.png';
import avatar from './assets/Netflix-avatar.png';

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []
    )
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false)
        }
    }

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
            </div>
            <img  onClick={() => navigate('/')} className='nav__logo' src={logo} alt='logo'/>
            {/* <Link to="/profile"> */}
                <img className='nav__avatar' onClick={() =>navigate('/profile')} src={avatar} alt='avatar' />
            {/* </Link> */}
            
        </div>
    )
}

export default Nav