import React from "react";

const CountryFiltering = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <div>
      Find countries <input value={value} onChange={handleChange} />
    </div>
  )
}

export default CountryFiltering;
