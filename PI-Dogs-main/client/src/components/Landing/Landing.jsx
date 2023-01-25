import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div>
        <div>
          <h1>PI-DOGS SoyHenry</h1>
          <h3>
            Pi-DOGS es un proyecto con tematica de perros <br />
            donde puedes, desde buscar el perro que <br />
            más te guste, haste crear el tuyo propio!!!.
          </h3>
        </div>
        <Link to="/home">
          <button>INGRESAR</button>
        </Link>
      </div>
    </div>
  );
}
