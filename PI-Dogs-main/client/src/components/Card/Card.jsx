import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  image,
  name,
  temperament,
  weight_min,
  weight_max,
  id,
}) {
  return (
    <div>
      <div>
        <img src={image} alt={`Image of ${name}`} />
      </div>
    </div>
  );
}
