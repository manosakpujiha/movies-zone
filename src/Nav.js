import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

// import { useHistory, Link } from "react-router-dom";
import './Nav.css';
import logo from './assets/MoviesZoneLogo.png';
import avatar from './assets/user emojipng.com-11281132.png';

function Nav() {
    const [show, handleShow] = useState(false);
    const user = useSelector(selectUser)
    
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
        <div className={`nav ${show && 'nav__black'}`} role="banner">
            <div className='nav__contents'>
            
                <img  onClick={() => navigate('/')} className='nav__logo' src={logo} alt='logo'/>
                {/* <Link to="/profile"> */}
                <div className='nav__buttons'>
                    <span className='nav__username'>{user?.email || 'Guest'}</span>
                    <img className='nav__avatar' onClick={() =>navigate('/profile')} src={avatar} alt='avatar' />
                    
                </div>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Nav