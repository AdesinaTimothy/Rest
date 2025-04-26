import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Nav from './Nav';
import backicon from '../src/assets/call-made.svg'
import backicon2 from '../src/assets/call-made22.svg'
import { darkModeContext } from './App';




export default function CountryDetails() {

    const {darkMode, setDarkMode} = useContext(darkModeContext);

    const { countryName } = useParams();
    const location = useLocation();
    const country = location.state?.country;
    const countries = location.state?.countries;
    const currencyName = Object.values(country.currencies).map(c => c.name);
    const languages = Object.values(country.languages);
    const borders = country.borders || [];

    console.log(countryName);
    
    const navigate = useNavigate();

    function backToHomePage () {
        navigate('/');
    }

    const joinCodeToCountry = {};

    countries.forEach((c) => {
        joinCodeToCountry[c.cca3] = c.name.common
    })

    const borderCountryNames = borders.map((code) => 
    joinCodeToCountry[code]);

    console.log(borderCountryNames)


    return (
    <div className="countrypage-section">
        <Nav/>
        <div className='global-container'>
       
            <div className="back-container" onClick={backToHomePage}>
                <img src={ darkMode? backicon2 : backicon} alt="back-icon" />
                <p>back</p>
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

                <div className="details-country-details">
                    <div className="countries-details-left">
                        <div className="native-name card-small">
                            <h3>Native Name:</h3>
                            <p>{country.name.common}</p>
                        </div>

                        <div className="population card-small">
                            <h3 className='small-h3'>Population:</h3>
                            <p>{country.population}</p>
                        </div>

                        <div className="region card-small">
                            <h3 className='small-h3'>Region:</h3>
                            <p>{country.region}</p>
                        </div>

                        <div className="sub-region card-small">
                        <h3 className='small-h3'>Sub-Region:</h3>
                        <p>{country.subregion}</p>
                        </div>

                        <div className="capital card-small">
                        <h3 className='small-h3'>Capital:</h3>
                        <p>{country.capital}</p>
                        </div>
                    </div>

                    <div className="countries-details-right">
                        <div className="Top-level-domain card-small">

                        <h3 className='small-h3'>Top Level Domain:</h3>
                        <p>{country.tld}</p>
                        </div>

                        <div className="currencies card-small">
                        <h3 className='small-h3'>Currencies:</h3>
                        <p>{currencyName}</p>
                        </div>

                        <div className="languages card-small">
                        <h3 className='small-h3'>Languages:</h3>
                        <p>{languages.join(", ")}</p>
                        </div>
                    </div>
                </div>

                <div className="border-countries">
                    <div className="heading-border card-small">
                        <h3 className='small-h3'>Border Countries:</h3>
                    </div>
                    <div className="bordeers">
                        {borderCountryNames.map((each) => (
                            <div key={each} className="border-country-card">
                                <p>
                                {each}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
    
  )
}
