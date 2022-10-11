import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaRegMoon } from "react-icons/fa";
function Header() {
  const [isDark, setIsDark] = React.useState(true);

  function checkStorageMode() {
    let darkmode = localStorage.getItem("DarkMode") === "true";
    if (darkmode) {
      setIsDark(true);
      document.querySelector("html").classList.toggle("dark");
    } else {
      setIsDark(false);
    }
  }

  useEffect(() => {
    checkStorageMode();
  }, []);

  return (
    <header className="main-header">
      <Link to="/">
        <h1 className="page-title">Where in the world?</h1>
      </Link>

      <button
        className="darkmmode-button"
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
          isDark
            ? localStorage.setItem("DarkMode", false)
            : localStorage.setItem("DarkMode", true);
          isDark ? setIsDark(false) : setIsDark(true);
        }}
      >
        {isDark ? <FaMoon /> : <FaRegMoon />}
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
