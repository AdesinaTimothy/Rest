import React from 'react'
import { Outlet } from 'react-router-dom'


export default function RootLayout() {
  return (
    <div className="main-page">
        <div className="country-page">
            <Outlet />
        </div>
    </div>
  )
}
