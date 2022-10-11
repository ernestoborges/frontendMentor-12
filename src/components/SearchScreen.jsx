import { React, useState } from "react";
import Card from "/src/components/Card";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

function SearchScreen(props) {
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="main-content-wrapper">
      <div className="search-container">
        <div>
          <GoSearch />
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Search for a coutry..."
          />
        </div>
        <div className="custom-select">
          <select
            onChange={(event) => {
              setRegion(event.target.value);
            }}
            defaultValue=""
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      {/* cards */}
      <div className="galery-container">
        {region !== ""
          ? props.countries
              .filter((item) =>
                item.name.common.toLowerCase().includes(name.toLowerCase())
              )
              .filter((item) => item.region.includes(region))
              .map((item, index) => {
                return (
                  <Link to={"/country/" + item.cca3}>
                    <Card
                      key={index}
                      cca3={item.cca3}
                      name={item.name.common}
                      imgUrl={item.flags.png}
                      population={item.population}
                      region={item.region}
                      capital={item.capital}
                      selectCountry={props.selectCountry}
                    />
                  </Link>
                );
              })
          : props.countries
              .filter((item) =>
                item.name.common.toLowerCase().includes(name.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <Link to={"/country/" + item.cca3} key={index}>
                    <Card
                      cca3={item.cca3}
                      name={item.name.common}
                      imgUrl={item.flags.png}
                      population={item.population}
                      region={item.region}
                      capital={item.capital}
                      selectCountry={props.selectCountry}
                    />
                  </Link>
                );
              })}
      </div>
    </div>
  );
}

export default SearchScreen;
