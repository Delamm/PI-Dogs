import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogName } from "../../redux/actions";
import { useHistory } from "react-router-dom";

export default function NavBar({ pag }) {
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
    pag(1);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => handleInput(e)}
          value={dog}
          placeholder="Buscar..."
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          WOAF!!
        </button>
      </form>
    </div>
  );
}
