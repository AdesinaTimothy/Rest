import React from 'react'
import { useLocation } from 'react-router-dom';
import Nav from './Nav';

export default function CountryDetails({darkMode}) {
    const location = useLocation();
    const country = location.state?.country;
   
    // const currencies = country.currencies
    // const currencyName = currencies.name

    const currencyName = Object.values(country.currencies).map(c => c.name);
    const languages = Object.values(country.languages);
    console.log(languages);


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
                        <p>{languages.join(" ")}</p>
                        </div>
                    </div>
                </div>

                <div className="border-countries">
                    <div className="heading-border">
                        <h3 className='small-h3'>Border Countries:</h3>
                    </div>
                    <div className="bordeers">
                        <div className="border-country">France</div>
                        <div className="border-country">Germany</div>
                        <div className="border-country">Netherlands</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
    
  )
}
