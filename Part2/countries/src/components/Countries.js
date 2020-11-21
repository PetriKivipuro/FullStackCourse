import React from "react";
import Country from './Country'


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
