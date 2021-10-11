import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Country API react combo compo</h1>
            <h2>Countries available: {countries.length}</h2>

            <div className="countries-container">
                {
                    countries.map(ctry => <Country
                        key={ctry.latlng} //console e unique key error show korbe eta na dile, api er je property ta unique ota khuje evabe boshabo

                        kantri={ctry}

                    // name={country.name.common}
                    // capital={country.capital}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;