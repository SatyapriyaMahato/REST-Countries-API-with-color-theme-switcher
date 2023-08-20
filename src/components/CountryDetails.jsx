import React from "react";

function CountryDetails() {
  return (
    <>
      <div class="country-details active container">
        <div class="left">
          <img src="https://flagcdn.com/w320/al.png" alt="" width="600" />
        </div>
        <div class="right">
          <h2 class="name">Afganistan</h2>
          <div class="details">
            <div class="details-left">
              <p>
                Native Name:<span class="native-name"> Shqipëria</span>
              </p>
              <p>
                Population:<span class="population"> 2837743</span>
              </p>
              <p>
                Region:<span class="region"> Kabul</span>
              </p>
              <p>
                Sub Region:<span class="sub-region"> Kabul</span>
              </p>
              <p>
                Capital:<span class="sapital"> Kabul</span>
              </p>
            </div>
            <div class="details-left">
              <p>
                Top Level Domain:<span class="top-levelDomain"> 40218234</span>
              </p>
              <p>
                Currencies:<span class="currencies"> Asia</span>
              </p>
              <p>
                Languages:<span class="languages"> Kabul</span>
              </p>
            </div>
          </div>
          <div class="border-countries">
            <div class="left">
              <p>Border Countrie: </p>
            </div>
            <div class="right">
              <button class="border-countries__btn">France</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
