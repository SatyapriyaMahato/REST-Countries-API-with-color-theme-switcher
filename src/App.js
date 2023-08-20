import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountryCard from './components/CountryCard';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/free-solid-svg-icons";
function App() {
  let themeState = true;

  const darkMode = () => {
    let darkModeBtn = document.querySelector('.mode');
    let darkModeIcon = document.getElementById('moonIcon-dark')
    let lightModeIcon = document.getElementById('moonIcon-light')
    if (themeState) {
      document.body.className = "";
      document.body.classList.add(`theme-2`);
      darkModeBtn.innerHTML = ' Light Mode';
      darkModeIcon.style.display = "inline";
      lightModeIcon.style.display = "none";
      themeState = false;
    } else {
      document.body.className = "";
      document.body.classList.add(`theme-1`);
      themeState = true;
      darkModeBtn.innerHTML = ' Dark Mode';
      lightModeIcon.style.display = "inline";
      darkModeIcon.style.display = "none";

    }
  }


  // function show(text) {
  //   document.querySelector('.toggle-menu').value = text;
  // }


  const dropDown = () => {
    const dd = document.querySelector('.dropdown');
    dd.classList.toggle('active');
  };


  return (
    <>
      <Header darkMode={darkMode} />
      <SearchBar dropDown={dropDown} />
      <div class="countries container">
        <CountryCard />
      </div>
    </>

  );
}

export default App;
