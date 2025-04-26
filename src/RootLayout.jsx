import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { darkModeContext } from './App'



export default function RootLayout() {
  const {darkMode, setDarkMode} = useContext(darkModeContext);



  
  return (
    <div className="main-page">
        <div className="country-page">
            <Outlet />
        </div>
    </div>
  )
}
