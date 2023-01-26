// importar acciones
import {
  GET_ALL_DOGS,
  GET_ALL_TEMPERS,
  GET_DOG_DETAIL,
  GET_DOG_NAME,
  FILTER_BY_NAME,
  FILTER_BY_TEMPERS,
  FILTER_BY_WEIGHT,
  FILTER_CREATED_DOG,
  CLEAR_DETAIL,
  POST_DOG,
} from "./actions.js";
// estado inicial
let initialState = {
  dogs: [],
  temperaments: [],
  allDogs: [],
  dogDetail: [],
};
//export un reducer que tenga logica para las actions

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: payload,
        allDogs: payload,
      };

    case GET_ALL_TEMPERS:
      return {
        ...state,
        temperaments: payload,
      };

    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: payload,
      };

    case GET_DOG_NAME:
      return {
        ...state,
        dogs: payload,
      };

    case FILTER_BY_NAME:
      const filter =
        payload === "A-Z"
          ? state.dogs.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              return 0;
            });

      return {
        ...state,
        dogs: filter,
      };

    case FILTER_BY_TEMPERS:
      const filterTemper = state.allDogs;
      const dogsTemper =
        payload === "All"
          ? filterTemper
          : filterTemper.filter((e) => {
              return e.temperament?.includes(payload);
            });

      return {
        ...state,
        dogs: dogsTemper,
      };

    case FILTER_BY_WEIGHT:
      const dogPeso = state.allDogs.filter((e) => e.weight_min);
      const filterPeso =
        payload === "min_weight"
          ? dogPeso.sort((a, b) => {
              return a.weight_min - b.weight_min;
            })
          : dogPeso
              .sort((a, b) => {
                return a.weight_min - b.weight_min;
              })
              .reverse();

      return {
        ...state,
        dogs: filterPeso,
      };

    case FILTER_CREATED_DOG:
      const allData = state.allDogs;
      const filterDb =
        payload === "created"
          ? allData.filter((e) => e.createdInDb)
          : allData.filter((e) => !e.createdInDb);
      return {
        ...state,
        dogs: payload === "all" ? state.allDogs : filterDb,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        dogDetail: [],
      };

    case POST_DOG:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
