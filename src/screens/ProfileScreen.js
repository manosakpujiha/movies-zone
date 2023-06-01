import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import img from '../assets/MoviesZoneBg.jpg';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';

function ProfileScreen() {
    const user = useSelector(selectUser)
    console.log(user)

  return (
        <div className='profileScreen'>
            <Nav/>
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'></div>
                <img src={img} alt='background'/>
                <div className="profileScreen__details">
                    <h2 className="">{user.email}</h2>
                    <div className="profileScreen__plans">
                        <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
            
            </div>
        </div>
  )
}

export default ProfileScreen