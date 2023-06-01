import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase";
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login(
            {
              uid: userAuth.uid,
              email: userAuth.email,
            }
          )
        )
        console.log(`User is signed in as ${userAuth.email} and your user name is ${userAuth.displayName}`)
      } else {
          console.log(`User is signed out.`, userAuth)
          dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <BrowserRouter>
        { !user ? <LoginScreen/> : (
          <>
            <Routes>
              <Route path="/" element={<HomeScreen/>} />
            </Routes>
            <Routes>
              <Route path="/profile" element={<ProfileScreen/>} />
            </Routes>
          </>
        )
       }
      </BrowserRouter>
    </div>
  );
}

export default App;
