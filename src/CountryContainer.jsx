import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import Filter from './Filter';
import Search from './Search';
import Nav from './Nav';


export default function CountryContainer() {

const [countries, setCountries] = useState([]); 
const [filteredCountries, setFilteredCountries] = useState([]);
const [loading, setLoading] = useState(true); 
const [region, setRegion] = useState("")
const [darkMode, setDarkMode] = useState(false)



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


//This function actually gets the "region" variable and compare it with the country.region
function handleRegionChange (region) {
  setRegion(region);
  if( region === "") {
    setFilteredCountries(countries)
  } else {
    const filteredregions = countries.filter((country) => country.region === region);
    setFilteredCountries(filteredregions)
  }
}


  return (
    <div className="all">

      <Nav darkMode= {darkMode} handleDarkMode = {setDarkMode}/>

      <div className="global-container">
          

          <div className='filtercomp-container'>
              <Search />
              <Filter region= {region}
              onRegionChange = {handleRegionChange}
              darkMode = {darkMode}
              />
          </div>

          <div className='countrycontainer'>
              {filteredCountries.map((country) => (
                <CountryCard key = {country.cca3} country = {country}/>
              ))}
         </div>
    </div>

    </div>
    

    
  )
}
