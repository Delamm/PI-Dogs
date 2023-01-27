import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogId, clearDetail } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Detail(props) {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogDetail);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getDogId(props.match.params.id));
    return dispatch(clearDetail());
  }, [dispatch]);

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      {Object.keys(dog).length ? (
        <div>
          <img
            src={
              dog[0].image
                ? dog[0].image
                : (dog[0].image =
                    "https://www.nextdayflyers.com/blog/wp-content/uploads/2014/10/Pet-Flyer-1-768x1024.jpg")
            }
            alt="woaf?"
            width="400"
            height="400"
          />
          <div>
            <h1>Name: {dog[0].name}</h1>
            <h2>Life Temp: {dog[0].lifeTime}</h2>
            <h2>
              Weight: {dog[0].weight_min} - {dog[0].weight_max} Kg
            </h2>
            <h2>Height: {dog[0].height} Cm</h2>
            <div>
              <h2>Temperaments :</h2>
              <h2>{dog[0].temperament}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
}
