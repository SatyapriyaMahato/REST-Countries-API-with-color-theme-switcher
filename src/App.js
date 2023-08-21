import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountryCardsContainer from './components/CountryCardsContainer';
import CountryDetails from './components/CountryDetails';
import CountryData from "./data.json";


function App() {
  const [selectedCountry, setSelectedCountry] = useState(CountryData[0]);
  const [selectedCategory, setSelectedCategory] = useState('Filter by Region');
  const [filteredItems, setFilteredItems] = useState(CountryData); // Declare the state and state updater
  const categories = [...new Set(CountryData.map(item => item.region))];

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
    setSelectedCategory(a); // Update the selected category
    const updatedFilteredItems = a === "Filter by Region"
      ? CountryData
      : CountryData.filter(item => item.region === a);
    setFilteredItems(updatedFilteredItems);
  }

  const dropDown = () => {
    const dd = document.querySelector('.dropdown');
    dd.classList.toggle('clicked');
  };


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

  const toggleClass = (element, className) => {
    const el = document.querySelector(element);
    el.classList.toggle(className);
  };

  const activateElement = (element) => {
    const el = document.querySelector(element);
    el.classList.add("active");
  };

  const deactivateElement = (element) => {
    const el = document.querySelector(element);
    el.classList.remove("active");
  };

  const flagCardClick = () => {
    toggleClass(".search-bar__wrapper", "active");
    toggleClass(".back-btn", "active");
    toggleClass(".country-details", "active");
    toggleClass(".countries", "active");
  };

  const showCountryDetails = () => {
    activateElement(".countries");
    deactivateElement(".country-details");
    deactivateElement(".back-btn");
    activateElement(".search-bar__wrapper");
  };


  return (
    <>
      <Header darkMode={darkMode} />
      <SearchBar dropDown={dropDown} show={show} showDetails={showDetails} />
      <CountryCardsContainer deafultContries={filteredItems} showDetails={showDetails} />
      <CountryDetails selectedCountry={selectedCountry} showBorderCountryDetails={showBorderCountryDetails} />
    </>

  );
}

export default App;
