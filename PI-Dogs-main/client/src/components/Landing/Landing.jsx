import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={style.background}>
      <div className={style.divs}>
        <div>
          <h1>PI-DOGS</h1>
          <h3>
            Pi-DOGS es un proyecto con tematica de perros <br />
            donde puedes, desde buscar el perro que <br />
            más te guste, haste crear el tuyo propio!!!.
          </h3>
        </div>
        <Link to="/home">
          <button className={style.button}>INGRESAR</button>
        </Link>
      </div>
    </div>
  );
}
