import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountryCard from './components/CountryCard';

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
    console.log(a);
  }


  const dropDown = () => {
    const dd = document.querySelector('.dropdown');
    dd.classList.toggle('active');
  };


  return (
    <>
      <Header darkMode={darkMode} />
      <SearchBar dropDown={dropDown} show={show} />
      <div class="countries container">
        <CountryCard />
      </div>
    </>

  );
}

export default App;
