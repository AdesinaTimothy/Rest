import React, { useState } from 'react'
import search1 from "../src/assets/search1.svg"
import search from "../src/assets/search.svg"

export default function Search({darkMode, searchTerm, onSearchChange}) {

  

  function handleSearchTime (e) {
      const searchedTerm = e.target.value;
      onSearchChange(searchedTerm)
      console.log(searchedTerm)
  }

  return (
    <div className='search-container'>
        
        <div className="search-image">
          <img src={darkMode? search1 : search} alt="search-icon" />
        </div>
        <div className="search-input">
          <input 
          type="text" 
          id="search" 
          placeholder="Search for a country"
          value={searchTerm}
          onChange={(e) => handleSearchTime(e)}
          />
        </div>
    </div>
  )
}





















// import React from 'react';

// export default function Filter({ onRegionChange }) {
//   return (
//     <div className='filter-container'>
//       <select 
//         id="regionFilter"
//         onChange={(e) => onRegionChange(e.target.value)} // Call the function passed from parent
//       >
//         <option value="">Filter by Region</option>
//         <option value="Africa">Africa</option>
//         <option value="Americas">America</option>
//         <option value="Asia">Asia</option>
//         <option value="Europe">Europe</option>
//         <option value="Oceania">Oceania</option>
//       </select>
//     </div>
//   );
// }

