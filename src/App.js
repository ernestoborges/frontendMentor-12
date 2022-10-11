import { React, useState, useEffect } from "react";
import "./styles.css";
import Header from "/src/components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchScreen from "/src/components/SearchScreen";
import InfoScreen from "/src/components/InfoScreen";
import { GiEarthAmerica } from "react-icons/gi";

export default function App() {
  const [countryList, setCountryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchCountries() {
    const url = "https://restcountries.com/v3.1/all";
    let apiResponse = await fetch(url);
    let data = await apiResponse.json();
    setCountryList(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <main className="App">
      <Router>
        {/* Header */}
        <Header />
        {!isLoading ? (
          <section className="main">
            <Routes>
              <Route
                path="/"
                exact
                element={<SearchScreen countries={countryList} />}
              />
              <Route
                path="country/:cca3"
                element={<InfoScreen countries={countryList} />}
              />
            </Routes>
          </section>
        ) : (
          <section className="main">
            <div className="loading">
              <GiEarthAmerica />
              <p>Loading...</p>
            </div>
          </section>
        )}
      </Router>
      <footer class="attribution">
        <p>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/ernestoborges">Ernesto Neto</a>
          .
        </p>
      </footer>
    </main>
  );
}
