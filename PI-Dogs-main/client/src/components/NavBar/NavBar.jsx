import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogName } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar({ paginado }) {
  const dispatch = useDispatch();
  const [dog, setDog] = useState("");
  const history = useHistory();

  const handleInput = (e) => {
    e.preventDefault();
    setDog(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dog) dispatch(getDogName(dog));
    setDog("");
    history.push("/home");
    paginado(1);
  };

  return (
    <div className={style.container}>
      <form className={style.form}>
        <input
          className={style.searchbar}
          type="text"
          onChange={(e) => handleInput(e)}
          value={dog}
          placeholder="Buscar..."
        />
        <button
          className={style.btn}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          WOAF!!
        </button>
      </form>
    </div>
  );
}
