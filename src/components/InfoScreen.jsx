import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function InfoScreen(props) {
  const param = useParams();
  const navigate = useNavigate();

  function findNativeName(name) {
    let nativeLangName = Object.values(name.nativeName);
    return nativeLangName.map((item, index) =>
      index === nativeLangName.length - 1 ? item.common : item.common + ", "
    );
  }
  function findLanguages(lang) {
    let languagesList = Object.values(lang);
    return languagesList.map((item, index) =>
      index === languagesList.length - 1 ? item : item + ", "
    );
  }
  function findCurrencies(currencies) {
    let languagesList = Object.values(currencies);
    return languagesList.map((item, index) =>
      index === languagesList.length - 1 ? item.name : item.name + ", "
    );
  }
  function findCountry(code) {
    let country = props.countries.filter((item) => item.cca3 === code);
    return country[0].name.common;
  }

  return (
    <article className="info-wrapper">
      <div>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <BsArrowLeft />
          Back
        </button>
      </div>
      {props.countries
        .filter((country) => country.cca3 === param.cca3)
        .map(
          ({
            flags,
            name,
            population,
            region,
            subregion,
            capital,
            tld,
            borders,
            languages,
            currencies
          }) => (
            <div className="country-info-container">
              <section className="flag-section">
                <img className="country-info-img" src={flags.png} alt="" />
              </section>
              <section className="info-section">
                <header>
                  <h2>{name.common}</h2>
                </header>
                <div className="country-info">
                  <ul>
                    <li>
                      <span>Native Name: </span>
                      <span>{findNativeName(name)}</span>
                    </li>
                    <li>
                      <span>Population: </span>
                      <span>{population.toLocaleString()}</span>
                    </li>
                    <li>
                      <span>Region: </span>
                      <span>{region}</span>
                    </li>
                    <li>
                      <span>Sub Region: </span>
                      <span>{subregion}</span>
                    </li>
                    <li>
                      <span>Capital: </span>
                      <span>{capital}</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>Top Level Domain: </span>
                      <span>{tld ? tld[0] : "Do not have"}</span>
                    </li>
                    <li>
                      <span>Currencies: </span>
                      <span>{findCurrencies(currencies)}</span>
                    </li>
                    <li>
                      <span>Languages: </span>
                      <span>{findLanguages(languages)}</span>
                    </li>
                  </ul>
                </div>
                <footer className="borders-container">
                  <span>Border Countries: </span>
                  <div className="borders-button-container">
                    {borders
                      ? borders.map((code) => {
                          return (
                            <button
                              className="border-button"
                              type="button"
                              onClick={() => navigate("/country/" + code)}
                            >
                              {findCountry(code)}
                            </button>
                          );
                        })
                      : "No border country"}
                  </div>
                </footer>
              </section>
            </div>
          )
        )}
    </article>
  );
}

export default InfoScreen;
