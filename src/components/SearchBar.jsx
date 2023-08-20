import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

function SearchBar({ dropDown, show, showDetails }) {
  return (
    <>
      <div class="search-bar container">
        <div
          class="back-btn active"
          onClick={() => {
            showDetails();
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>
          <span>Back</span>
        </div>
        <div class={`search-bar__wrapper`}>
          <div class="left">
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
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
              <span
                class="toggle-menu"
                onClick={() => {
                  show("Filter by Region");
                }}
              >
                Filter by Region
              </span>
              <div class="options">
                <div
                  class="option"
                  onClick={() => {
                    show("Africa");
                  }}
                >
                  Africa
                </div>
                <div
                  class="option"
                  onClick={() => {
                    show("America");
                  }}
                >
                  America
                </div>
                <div
                  class="option"
                  onClick={() => {
                    show("Asia");
                  }}
                >
                  Asia
                </div>
                <div
                  class="option"
                  onClick={() => {
                    show("Asia");
                  }}
                >
                  Europe
                </div>
                <div
                  class="option"
                  onClick={() => {
                    show("Oceania");
                  }}
                >
                  Ocenia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
