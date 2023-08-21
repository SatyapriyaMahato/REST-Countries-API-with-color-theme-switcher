import React from "react";
import CountryCard from "./CountryCard";
import CountryData from "../data.json";

function CountryCardsContainer({ showDetails }) {
  return (
    <>
      <div className={`countries container`}>
        {CountryData.map((country) => {
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
