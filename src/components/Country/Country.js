import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, flags } = props.kantri;
    return (
        <div className="country">
            <h3>Country Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;