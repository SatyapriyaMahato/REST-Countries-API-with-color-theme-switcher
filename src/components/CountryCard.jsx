import React from "react";

function CountryCard({ showDetails, country }) {
  return (
    <>
      <div
        className="country"
        onClick={() => {
          showDetails(country);
        }}
      >
        <img src={country.flags.png} alt="flag" />

        <div className="details">
          <h2 className="name">{country.name}</h2>
          <p className="population">
            <span>Population: </span>
            {country.population.toLocaleString("en-IN")}
          </p>
          <p className="region">
            <span>Region: </span>
            {country.region}
          </p>
          {country.capital && (
            <p className="capital">
              <span>Capital: </span>
              {country.capital}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default CountryCard;
