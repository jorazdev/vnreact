import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../css/Country.css"
import Card from './Card';

const Countries = () => {
  const [continentSelected, setContinentSelected] = useState("")
  const [countries, setCountries] = useState([])
  const [countryContinent, setCountryContinent] = useState([])

  const continents = ["Africa","America","Asia","Europe","Oceania"]

  const getCountries = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all")
    setCountries(res.data)
  }

  const getCountryContinent = async (continent) => {
    setContinentSelected(continent)
    const coun = countries.filter((country) => country.continents[0].includes(continent))
    setCountryContinent(coun)
  }

    useEffect( () => {
      getCountries()
    }, [])

    return (
        <div className="countries">
            <div className="continents">
                {
                    continents.map((continent) => (
                        <li>
                            <input type="radio" 
                                id={continent} 
                                name="continentRadio" 
                                onChange={(e) => getCountryContinent(e.target.id)}/>
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
            </div>
            <h1>Countries {countries.length}</h1>
            <h1>Countries continent {continentSelected} {countryContinent.length}</h1>
              <ul>
                {
                  countries
                  .filter((item) => item.continents[0].includes(continentSelected))
                  .map((country, index) => (
                    <Card 
                      key={index}
                      country={country} 
                      index={index}/>
                  ))
                }
              </ul>
        </div>
    );
};

export default Countries;