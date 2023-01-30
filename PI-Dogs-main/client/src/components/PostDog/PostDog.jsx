import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTempers } from "../../redux/actions";

const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "The dog must be named";
  }

  if (input.name && !/^[a-zA-Z]*$/.test(input.name)) {
    errors.name = "The name can not contain numbers or special caracters";
  }

  if (!input.height_min || input.height_min <= 0) {
    errors.height_min = "The min height must be bigger";
  }

  if (!input.height_max || input.height_max <= 0) {
    errors.height_max = "The max height must be bigger";
  }

  if (parseInt(input.height_min) >= parseInt(input.height_max)) {
    errors.especial1 =
      "The height min can not be bigger or equal than the max height";
  }

  if (parseInt(input.weight_min) >= parseInt(input.weight_max)) {
    errors.especial2 =
      "The weight min can not be bigger or equal than the max weight";
  }

  if (input.height) {
    if (!/^[0-9]*$/) {
      errors.height = "It must be only numbers";
    }
  }

  if (!input.weight_min || input.weight_min <= 0) {
    errors.weight_min = "The min weight must be bigger";
  }

  if (input.weight_min) {
    if (input.weight_max) {
      if (!/^[0-9]*$/) {
        errors.weight_min = "It must be only numbers";
      }
    }
  }

  if (!input.weight_max || input.weight_max <= 0) {
    errors.weight_max = "The max weight must be bigger";
  }

  if (input.weight_max) {
    if (!/^[0-9]*$/) {
      errors.weight_max = "It must be only numbers";
    }
  }

  if (!input.lifeTime || input.lifeTime <= 0) {
    errors.lifeTime = "The life span must be grather";
  }

  if (input.lifeTime) {
    if (!/^[0-9]*$/) {
      errors.lifeTime = "It must be only numbers";
    }
  }

  return errors;
};

export default function PostDog() {
  const dispatch = useDispatch();

  const history = useHistory();

  const allTemperaments = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    height_min: 0,
    height_max: 0,
    weight_min: 0,
    weight_max: 0,
    lifeTime: 0,
    image: "",
    temperament: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {
    dispatch(getTempers());
  }, [dispatch]);

  const handleSelect = (e) => {
    if (!input.temperament.includes(e.target.value)) {
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDog(input));

    alert("the dog was successfully created");
    setInput({
      name: "",
      height_min: 0,
      height_max: 0,
      weight_min: 0,
      weight_max: 0,
      lifeTime: 0,
      temperament: [],
    });
    history.push("/home");
  };

  const handleErase = (e) => {
    setInput({
      ...input,
      temperament: input.temperament.filter((a) => a !== e),
    });
  };

  return (
    <div>
      <div>
        <Link to="/home">
          <button>HOME</button>
        </Link>
        <h2>CREATE DOG</h2>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h3>NAME:</h3>
            <input
              required
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3>MIN HEIGHT:</h3>
            <input
              min="0"
              type="number"
              value={input.height_min}
              name="height_min"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3>MAX HEIGHT:</h3>
            <input
              min="0"
              type="number"
              value={input.height_max}
              name="height_max"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3>MIN WEIGHT:</h3>
            <input
              min="0"
              type="number"
              value={input.weight_min}
              name="weight_min"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3>MAX WEIGHT:</h3>
            <input
              min="0"
              type="number"
              value={input.weight_max}
              name="weight_max"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3>LIFE SPAN:</h3>
            <input
              min="0"
              type="number"
              value={input.lifeTime}
              name="lifeTime"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3>TEMPERAMENTS</h3>
            <select onChange={handleSelect}>
              <option value="all" disabled selected defaultValue>
                prototemperament
              </option>
              {allTemperaments.map((e) => {
                return (
                  <option value={e.name} key={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          {errors &&
          (errors.name ||
            errors.height_min ||
            errors.height_max ||
            errors.weight_min ||
            errors.weight_max ||
            errors.lifeTime ||
            errors.especial1 ||
            errors.especial2 ||
            !input.name.length ||
            input.height_min <= 0 ||
            input.height_max <= 0 ||
            input.weight_min <= 0 ||
            input.weight_max <= 0 ||
            input.lifeTime <= 0 ||
            input.height_min >= input.height_max ||
            input.weight_min >= input.weight_max ||
            !input.temperament.length) ? (
            <div>The dog could not be created</div>
          ) : (
            <button type="submit">CREATE</button>
          )}
        </form>
        <div>
          {input.temperament.map((d, i) => {
            return (
              <div key={i++}>
                <div>{d}</div>
                <button onClick={() => handleErase(d)}>X</button>
              </div>
            );
          })}
        </div>
        <div>
          <h2>ERRORS :</h2>
          <div>
            <h2>{errors.name && <p>{errors.name}</p>}</h2>
            <h2>{errors.height_min && <p>{errors.height_min}</p>}</h2>
            <h2>{errors.height_max && <p>{errors.height_max}</p>}</h2>
            <h2>{errors.weight_min && <p>{errors.weight_min}</p>}</h2>
            <h2>{errors.weight_max && <p>{errors.weight_max}</p>}</h2>
            <h2>{errors.lifeTime && <p>{errors.lifeTime}</p>}</h2>
            <h2>{errors.temperament && <p>{errors.temperament}</p>}</h2>
            <h2>{errors.especial1 && <p>{errors.especial1}</p>}</h2>
            <h2>{errors.especial2 && <p>{errors.especial2}</p>}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
