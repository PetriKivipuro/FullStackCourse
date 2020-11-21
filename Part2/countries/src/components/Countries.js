import React from "react";

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

const Countries = ({ countries, setValue }) => {
  if (countries.length === 0) {
    return <div>Can't find, try again</div>
  }
  if (countries.length === 1) {
    return <Country country={countries[0]} />
  }
  if (countries.length < 10) {
      console.log(countries)
    return(
        <div>
          {countries.map(c =>
            <div key={c.alpha2Code}>
              {c.name}
              <button onClick={() => setValue(c.name)}>
                show
              </button>
            </div>
          )}
        </div>
      )
  }
  return <div>Too many results, give more specified search!</div>;
};

export default Countries;
