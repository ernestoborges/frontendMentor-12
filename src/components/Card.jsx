import React from "react";

function Card(props) {
  return (
    <article className="card-container">
      <img src={props.imgUrl} className="card-flag" alt="" />
      <section className="card-info">
        <header className="card-info-title">
          <h2>{props.name}</h2>
        </header>
        <ul>
          <li className="card-info-item">
            <span>Population: </span>
            <span>{props.population.toLocaleString()}</span>
          </li>
          <li className="card-info-item">
            <span>Region: </span>
            <span>{props.region}</span>
          </li>
          <li className="card-info-item">
            <span>Capital: </span>
            <span>{props.capital}</span>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Card;
