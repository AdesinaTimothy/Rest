import React from 'react'

export default function CountryCard({country}) {
  return (
    <div className='class-container'>
      <div className="card-top">
        <div className="flag-container">
        <img src={country.flags.png} loading="lazy" alt="flag" />
        </div>
        
      </div>
      <div className="card-down">
        <div className="country">
         <h2>{country.name.common}</h2>
         
        </div>


        <div className="population"> 
            <h3>Population: </h3>  
            <p>{country.population}</p> 
        </div>

        <div className="region">
            <h3>Region: </h3>
            <p>{country.region}</p> 
        </div>

        <div className="capital">
            <h3>Capital: </h3>
            <p>{country.capital}</p> 
        </div>

      </div>
    </div>
  )
}
