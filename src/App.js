import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountryCardsContainer from './components/CountryCardsContainer';
import CountryDetails from './components/CountryDetails';
import CountryData from "./data.json";


function App() {
  const [selectedCountry, setSelectedCountry] = useState(CountryData[0]);

  let themeState = true;
  const darkMode = () => {
    let darkModeBtn = document.querySelector('.mode');

    if (themeState) {
      document.body.className = "";
      document.body.classList.add(`theme-2`);
      darkModeBtn.innerHTML = ' Light Mode';
      themeState = false;
    } else {
      document.body.className = "";
      document.body.classList.add(`theme-1`);
      darkModeBtn.innerHTML = ' Dark Mode';
      themeState = true;

    }
  }

  const show = (a) => {
    document.querySelector('.toggle-menu').innerHTML = a;
  }

  const dropDown = () => {
    const dd = document.querySelector('.dropdown');
    dd.classList.toggle('clicked');
  };

  let updatedValue = {};

  const showDetails = (key) => {
    flagCardClick();
    setSelectedCountry(previousState => {
      return { ...previousState, ...key }
    });

  };

  const showBorderCountryDetails = (borderCountry) => {
    const country = CountryData.find(
      (country) => country.name === borderCountry
    );
    const countryObj = country ? country.name : "Unknown Country";
    showDetails(country);
    showCountryDetails();
  }

  const flagCardClick = () => {
    const searchBarWrapper = document.querySelector(".search-bar__wrapper");
    const backBtn = document.querySelector(".back-btn");
    const countryDetails = document.querySelector(".country-details");
    const countries = document.querySelector(".countries");
    searchBarWrapper.classList.toggle("active");
    backBtn.classList.toggle("active");
    countryDetails.classList.toggle("active");
    countries.classList.toggle("active");
  };

  const showCountryDetails = () => {
    const countries = document.querySelector(".countries");
    countries.classList.add("active");
    const countryDetails = document.querySelector(".country-details");
    countryDetails.classList.remove("active");
    const backBtn = document.querySelector(".back-btn");
    backBtn.classList.remove("active");
    const searchBarWrapper = document.querySelector(".search-bar__wrapper");
    searchBarWrapper.classList.add("active");
  }

  return (
    <>
      <Header darkMode={darkMode} />
      <SearchBar dropDown={dropDown} show={show} showDetails={showDetails} />
      <CountryCardsContainer showDetails={showDetails} />
      <CountryDetails selectedCountry={selectedCountry} showBorderCountryDetails={showBorderCountryDetails} />
      {/* Pass the selected country to CountryDetails */}
    </>

  );
}

export default App;
