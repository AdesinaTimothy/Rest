import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import Filter from './Filter';
import Search from './Search';
import Nav from './Nav';
import { useNavigate } from "react-router-dom";


export default function CountryContainer() {

const [countries, setCountries] = useState([]); 
const [filteredCountries, setFilteredCountries] = useState([]);
const [region, setRegion] = useState("")
const [darkMode, setDarkMode] = useState(false)
const [searchTerm, setSearchTerm] = useState("");

const navigate = useNavigate();



useEffect(() => {
     const fetchData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result = await response.json();
        setCountries(result);
        setFilteredCountries(result);
     } ;

     fetchData();
}, []);


//This the function that filters the countries based on the region selected

function handleRegionChange (region) {
  setRegion(region);
  if( region === "") {
    setFilteredCountries(countries)
  } else {
    const filtered = countries.filter((country) => country.region === region);
    setFilteredCountries(filtered);
  }
}

//This is the function that filters the countries based on the input search fields
    function searchCountriesHandler (searchTerm) {
      setSearchTerm(searchTerm);
      let filtered;

      if ( searchTerm === "") {
        filtered = countries
      } else {
        filtered = countries.filter((country) => 
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
      };

      setFilteredCountries(filtered)
    }

    function handleOnClick (country) {
      const clickedCountry = country.name;
      console.log(clickedCountry)
      navigate(`countrypage`, {state: {country , countries}});
    }

  return (
    <div className="all">

      <Nav darkMode= {darkMode} handleDarkMode = {setDarkMode}/>

      <div className="global-container">
          

          <div className='filtercomp-container'>
              <Search darkMode={darkMode} searchTerm={searchTerm} onSearchChange = {searchCountriesHandler}/>
              <Filter region= {region}
              onRegionChange = {handleRegionChange}
              darkMode = {darkMode}
              />
          </div>

          <div className='countrycontainer'>
              {filteredCountries.map((country) => (
                <CountryCard key = {country.cca3} country = {country} onClick = {() => handleOnClick(country)}/>
              ))}
              
          </div>
    </div>

    </div>
    

    
  )
}
