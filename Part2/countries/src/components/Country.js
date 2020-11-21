import React from 'react'

const Country = ({ country }) => {
    return (
      <div>
        <h1>{country.name}</h1>
        <div>Capital: {country.capital}</div>
        <div>Population: {country.population}</div>
  
        <h2>Languages</h2>
  
        <ul>
          {country.languages.map((lang) => (
            <li key={lang.iso639_2}>{lang.name}</li>
          ))}
        </ul>
        <div>
          <img src={country.flag} height="80xp" alt="flag" />
        </div>
      </div>
    );
  };

  export default Country
  