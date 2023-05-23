import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';

function App() {
  const user = '';
  return (
    <div className="app">
      <BrowserRouter>
        { !user ? <Login/> : <HomeScreen/>}
        <Routes>
          <Route path="/Login" element={<h1>Login Page</h1>} />
          <Route path="/test" element={<h1>Test Page</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
