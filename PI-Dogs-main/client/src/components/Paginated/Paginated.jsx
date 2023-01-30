import React from "react";
import style from "./Paginated.module.css";

export default function Paginate({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = [];
  //divide todos los perros por la cantidad de perros que se pueden mostrar por pag
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.back}>
      <ul>
        {pageNumbers?.map((num) => {
          return (
            <li className={style.list} key={num}>
              <button onClick={() => paginado(num)}>{num}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
