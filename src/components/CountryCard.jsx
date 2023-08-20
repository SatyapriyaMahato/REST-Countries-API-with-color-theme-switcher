import React from "react";

function CountryCard() {
  return (
    <>
      <div class="country">
        <img src="https://flagcdn.com/w320/al.png" alt="flag" />

        <div class="details">
          <h2 class="name">Afganistan</h2>
          <p class="population">
            <span>Population: </span>40218234
          </p>
          <p class="region">
            <span>Region: </span>Asia
          </p>
          <p class="capital">
            <span>Capital:</span>Kabul
          </p>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
