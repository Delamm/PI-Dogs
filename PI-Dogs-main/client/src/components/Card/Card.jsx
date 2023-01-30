import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({
  image,
  name,
  temperament,
  weight_min,
  weight_max,
  id,
}) {
  return (
    <div className={style.card}>
      <div className={style.cardImg}>
        <img
          src={image}
          alt={`Image of ${name}`}
          height="250px"
          width="200px"
        />
      </div>
      <div className={`${style.cardInfo}`}>
        <div className={`${style.titleStyle}`}>
          <Link to={`/home/${id}`}>
            <h3>{name}</h3>
          </Link>
          <h2>{temperament}</h2>
          <h2>
            MIN. WEIGHT: {weight_min} Kg / MAX. WEIGHT {weight_max} Kg
          </h2>
        </div>
      </div>
    </div>
  );
}
