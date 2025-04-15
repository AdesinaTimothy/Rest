import React from 'react'
import moon from "./assets/moon.svg";
import moon1 from "../src/assets/moon1.svg"

export default function Nav() {
  return (
    <nav className='nav-section'>
      <div className="global-container">
        <div className="nav-container">
        <div className="nav-left">
            <h2>Where in the world?</h2>
        </div>
        <div className="nav-right">
            <img src={moon} alt="" />
            <h4>Dark Mode</h4>
        </div>
        </div>
      </div>
    </nav>
  )
}
