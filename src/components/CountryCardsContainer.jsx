import React from "react";
import { useState } from "react";
import CountryCard from "./CountryCard";

function CountryCardsContainer({ showDetails }) {
  const [containerState, setContainerState] = useState(false);

  function showContainer() {
    setContainerState((containerState) => !containerState);
  }

  let toggleClass = containerState ? "active" : "";
  return (
    <>
      <div className={`countries container`}>
        <CountryCard showContainer={showContainer} showDetails={showDetails} />
      </div>
    </>
  );
}

export default CountryCardsContainer;
