import React, { useContext, useEffect, useState } from 'react'
import moon from "./assets/moon.svg";
import home from "../src/assets/home.svg"
import home1 from "../src/assets/home1.svg"
import moon2 from "../src/assets/moon2.svg"
import { darkModeContext } from './App';
import { useNavigate } from 'react-router-dom';



export default function Nav() {

  const {darkMode, setDarkMode} = useContext(darkModeContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  function goHome () {
    navigate('/')
  }

  return (
    <nav className='nav-section'>
      <div className="global-container">
        <div className="nav-container">
        <div className="nav-left" onClick={goHome}>
            <img src={darkMode? home1 : home} alt="" />
            <h2>Where in the world?</h2>
        </div>
        <div className="nav-right" onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode? moon2 : moon} alt="" />
            <h4>Dark Mode</h4>
        </div>
        </div>
      </div>
    </nav>
  )
}
