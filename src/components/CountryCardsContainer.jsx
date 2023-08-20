import React from "react";
import CountryCard from "./CountryCard";

function CountryCardsContainer({ showDetails }) {
  return (
    <>
      <div className={`countries container`}>
        <CountryCard showDetails={showDetails} />
      </div>
    </>
  );
}

export default CountryCardsContainer;
