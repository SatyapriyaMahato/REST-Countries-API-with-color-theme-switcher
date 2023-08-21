import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({ darkMode }) {
  return (
    <>
      <header>
        <nav className="container">
          <div>
            <h1>Where in the Worlds?</h1>
            <span
              className="dark_mode-btn"
              onClick={() => {
                darkMode();
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMoon} />
              </span>
              <span className="mode"> Dark Mode</span>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
