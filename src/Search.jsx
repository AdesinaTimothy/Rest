import React from 'react'
import searchicon from "../src/assets/search.svg"

export default function Search() {
  return (
    <div className='search-container'>
        <img src={searchicon} alt="" />
        <input type="text" id="search" placeholder="Search for a country" />
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

