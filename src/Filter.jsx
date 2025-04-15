import React, { useState } from 'react'

export default function Filter({region, onRegionChange}) {
    
    

    const handleRegionSelect =(e) => {
        const selectedRegion = e.target.value
        onRegionChange(selectedRegion)
        console.log(selectedRegion)
    }

    
  return (
    <div className='filter-container'>
        
        <select 
        id="regionFilter"
        value={region}
        onChange={handleRegionSelect}
        >
        <option value="">Filter by Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}
