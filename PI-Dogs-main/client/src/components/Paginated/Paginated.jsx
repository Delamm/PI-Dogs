import React from "react";

export default function Paginate({ dogsPerPage, allDogs, paginated }) {
  const pageNumbers = [];
  //divide todos los perros por la cantidad de perros que se pueden mostrar por pag
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers?.map((num) => {
          return (
            <li key={num}>
              <button onClick={() => paginated(num)}>{num}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
