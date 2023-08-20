import React from "react";

function SearchBar({ dropDown }) {
  return (
    <>
      <div class="search-bar container">
        <div class="left">
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            class="search-field"
            type="text"
            placeholder="Serach for a country"
          />
        </div>
        <div class="right">
          <div
            class="dropdown"
            onClick={() => {
              dropDown();
            }}
          >
            <span>Filter by Region</span>
            <div class="options">
              <div class="option" onMo onmouseover="show('Africa')">
                Africa
              </div>
              <div class="option" onmouseover="show('America')">
                America
              </div>
              <div class="option" onmouseover="show('Asia')">
                Asia
              </div>
              <div class="option" onmouseover="show('Europe')">
                Europe
              </div>
              <div class="option" onmouseover="show('Ocenia')">
                Ocenia
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
