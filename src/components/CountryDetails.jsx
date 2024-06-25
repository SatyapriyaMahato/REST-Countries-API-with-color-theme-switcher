import React from "react";
import countriesData from "../data.json";

function CountryDetails({ selectedCountry, showBorderCountryDetails }) {
  return (
    <>
      <div className="country-details active container">
        <div className="left">
          <img src={selectedCountry.flags.png} alt="flag" width="600" />
        </div>
        <div className="right">
          <h2 className="name">{selectedCountry.name}</h2>
          <div className="details">
            <div className="details-left">
              <p>
                Native Name:{" "}
                <span className="native-name">
                  {" "}
                  {selectedCountry.nativeName}
                </span>
              </p>
              <p>
                Population:{" "}
                <span className="population">
                  {" "}
                  {selectedCountry.population.toLocaleString("en-IN")}
                </span>
              </p>
              <p>
                Region:{" "}
                <span className="region"> {selectedCountry.region}</span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="sub-region"> {selectedCountry.subregion}</span>
              </p>
              {selectedCountry.capital && (
                <p>
                  Capital:{" "}
                  <span className="capital">{selectedCountry.capital}</span>
                </p>
              )}
            </div>
            <div className="details-left">
              <p>
                Top Level Domain:
                <span className="top-levelDomain">
                  {" "}
                  {selectedCountry.topLevelDomain}
                </span>
              </p>
              {selectedCountry.currencies && (
                <p>
                  Currencies:
                  <span className="currencies">
                    {" "}
                    {selectedCountry.currencies[0].name}
                  </span>
                </p>
              )}
              <p>
                Languages:
                <span className="languages">
                  {" "}
                  {selectedCountry.languages
                    .map((language) => language.name)
                    .join(" ")}
                </span>
              </p>
            </div>
          </div>
          {selectedCountry.borders && (
            <div className="border-countries">
              <div className="left">
                <p>Border Countries: </p>
              </div>
              <div className="right">
                {selectedCountry.borders.map((borderCode, index) => {
                  const country = countriesData.find(
                    (country) => country.alpha3Code === borderCode
                  );

                  const countryName = country
                    ? country.name
                    : "Unknown Country";

                  return (
                    <button
                      onClick={() => {
                        showBorderCountryDetails(countryName);
                      }}
                      key={index}
                      className="border-countries__btn"
                    >
                      {countryName}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
