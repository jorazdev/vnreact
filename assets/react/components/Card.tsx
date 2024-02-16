import React from 'react';
import "../css/Card.css"

const Card = ({country, index}) => {
    return (
        <li className="card-country">
            <span>{index+1}</span>
            <img src={country.flags.svg}/>
            <div className='card-info'>
                <h3>{country.translations.fra.common}</h3>
                <p>{country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;