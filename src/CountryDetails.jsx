import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Nav from './Nav';

export default function CountryDetails() {
    const location = useLocation();
    const country = location.state?.country;
    console.log(country)


  return (
    <div className="countrypage-section">
        <Nav />
        <div className='global-container'>
       
            <div className="back-container">

            </div>
        <div className="country-details-container">
            <div className="details-left">
                <div className="details-image">
                    <img src={country.flags.png} alt="" />
                </div>
            </div>
            <div className="details-right">
                <div className="details-country-name">
                    <h1>{country.name.common}</h1>
                </div>
                <div className="details-country-details"></div>
                <div className="border-countries"></div>
            </div>
        </div>
        </div>
    </div>
    
    
  )
}
