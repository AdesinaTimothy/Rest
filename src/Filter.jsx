import React, { useState } from 'react'
import down from "../src/assets/down.svg"
import down1 from "../src/assets/down1.svg"

export default function Filter({region, onRegionChange, darkMode}) {
    
    

    const handleRegionSelect =(e) => {
        const selectedRegion = e.target.value
        onRegionChange(selectedRegion)
        console.log(selectedRegion)
    }

    
  return (
    <div className='filter-container'>
        
        <div className="select-div">
        <select 
          id="regionFilter"
          value={region}
          onChange={(e) =>handleRegionSelect(e)}
          >
          <option value="">Filter by Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        </div>
        

        <div className="arrow-div">
          <img src={darkMode? down : down1} alt="arrow-down" />
        </div>
    </div>
  )
}
