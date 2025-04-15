import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import Filter from './Filter';
import Search from './Search';


export default function CountryContainer() {

const [countries, setCountries] = useState([]); 
const [filteredCountries, setFilteredCountries] = useState([]);
const [loading, setLoading] = useState(true); 
const [region, setRegion] = useState("")


useEffect(() => {
     const fetchData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result = await response.json();
        setCountries(result);
        setFilteredCountries(result);
        setLoading(false);
     } ;

     fetchData();
}, []);


function handleRegionChange (region) {
  setRegion(region);
  if( region === "") {
    setFilteredCountries(countries)
  } else {
    const filteredregions = countries.filter((country) => country.region === region);
    setFilteredCountries(filteredregions)
  }
}

// best timo 

  return (

    <div className="global-container">
          <div className='filtercomp-container'>
              <Search />
              <Filter region= {region}
              onRegionChange = {handleRegionChange}
              />
          </div>

          <div className='countrycontainer'>
              {filteredCountries.map((country) => (
                <CountryCard key = {country.cca3} country = {country}/>
              ))}
         </div>
    </div>

    
  )
}
