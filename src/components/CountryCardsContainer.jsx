import React from "react";
import CountryCard from "./CountryCard";
import CountryData from "../data.json";

function CountryCardsContainer({ deafultContries, showDetails }) {
  return (
    <>
      {console.log(deafultContries)}
      <div className="countries container">
        {deafultContries.map((country) => {
          return (
            <CountryCard
              showDetails={showDetails}
              key={country.name}
              country={country}
            />
          );
        })}
      </div>
    </>
  );
}

export default CountryCardsContainer;
