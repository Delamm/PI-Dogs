import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  filterByName,
  filterDBDog,
  filterWeight,
  filterTemper,
  getAllDogs,
  getTempers,
} from "../../redux/actions";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";
import Paginated from "../Paginated/Paginated";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const allTemperaments = useSelector((state) => state.temperaments);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexLastDog = currentPage * dogsPerPage;
  const indexFirstDog = indexLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexFirstDog, indexLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTempers());
  }, []);

  function handleClick(e) {
    window.location.reload(false);
  }

  function handlerFilterCreated(e) {
    dispatch(filterDBDog(e.target.value));
    setCurrentPage(1);
  }

  function handlerFilterTemperament(e) {
    e.preventDefault();
    dispatch(filterTemper(e.target.value));
    setCurrentPage(1);
  }

  function handlerFilterName(e) {
    dispatch(filterByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handlerFilterWeight(e) {
    dispatch(filterWeight(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <button>Dogpedia</button>
          </Link>
        </div>
        <div>
          <div>
            <button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Get dogs again
            </button>
            <Link to="/create">
              <button>Create Dog</button>
            </Link>
          </div>
          <div>
            <NavBar paginado={paginado} />
            <div>
              <select defaultValue onChange={(e) => handlerFilterName(e)}>
                <option disabled>Order by name</option>
                <option key={1} value="A-Z">
                  A-Z
                </option>
                <option key={2} value="Z-A">
                  Z-A
                </option>
              </select>
              <select defaultValue onChange={(e) => handlerFilterWeight(e)}>
                <option disabled>Order by Weight</option>
                <option key={1} value="max_weight">
                  Max
                </option>
                <option key={2} value="min_weight">
                  Min
                </option>
              </select>
              <select defaultValue onChange={(e) => handlerFilterCreated(e)}>
                <option disabled>Order by created</option>
                <option key={1} value="all">
                  All
                </option>
                <option key={2} value="created">
                  Created
                </option>
                <option key={3} value="api">
                  Api
                </option>
              </select>
              <select
                defaultValue
                onChange={(e) => handlerFilterTemperament(e)}
              >
                <option disabled>Temperaments</option>
                <option key={1 + "e"} value="All">
                  All
                </option>
                {allTemperaments.map((temp) => (
                  <option value={temp.name} key={temp.id}>
                    {temp.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <Paginated
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />
      <div>
        {Object.keys(allDogs).length ? (
          <div>
            {currentDogs?.map((el) => {
              return (
                <div key={el.id}>
                  {
                    <Card
                      key={el.id}
                      id={el.id}
                      image={el.image}
                      name={el.name}
                      temperament={el.temperament}
                      weight_min={el.weight_min}
                      weight_max={el.weight_max}
                    />
                  }
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h1>LOADING...</h1>
          </div>
        )}
      </div>
    </div>
  );
}
