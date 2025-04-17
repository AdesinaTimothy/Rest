import React, { useEffect, useState } from 'react'
import moon from "./assets/moon.svg";
import home from "../src/assets/home.svg"
import home1 from "../src/assets/home1.svg"
import moon2 from "../src/assets/moon2.svg"

export default function Nav({darkMode, handleDarkMode}) {


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return (
    <nav className='nav-section'>
      <div className="global-container">
        <div className="nav-container">
        <div className="nav-left">
            <img src={darkMode? home1 : home} alt="" />
            <h2>Where in the world?</h2>
        </div>
        <div className="nav-right" onClick={() => handleDarkMode(!darkMode)}>
            <img src={darkMode? moon2 : moon} alt="" />
            <h4>Dark Mode</h4>
        </div>
        </div>
      </div>
    </nav>
  )
}
