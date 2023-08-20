import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountryCardsContainer from './components/CountryCardsContainer';
import CountryDetails from './components/CountryDetails';

function App() {
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

  const showDetails = () => {
    flagCardClick();
  };
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

  return (
    <>
      <Header darkMode={darkMode} />
      <SearchBar dropDown={dropDown} show={show} showDetails={showDetails} />
      <CountryCardsContainer showDetails={showDetails} />
      <CountryDetails />
    </>

  );
}

export default App;
