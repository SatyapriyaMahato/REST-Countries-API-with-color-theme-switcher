import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({ darkMode }) {
  return (
    <>
      <header>
        <nav class="container">
          <div>
            <h1>Where in the Worlds?</h1>
            <span
              class="dark_mode-btn"
              onClick={() => {
                darkMode();
              }}
            >
              <span id="moonIcon-light" display="none">
                <FontAwesomeIcon icon={faMoon} />
              </span>
              <span id="moonIcon-dark">
                <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
              </span>
              <span class="mode"> Dark Mode</span>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
