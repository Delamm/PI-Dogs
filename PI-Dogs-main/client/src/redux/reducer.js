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
  DELETE_DOG,
} from "./actions";
// estado inicial
let initialState = {
  dogs: [],
  temperaments: [],
  allDogs: [],
  dogDetail: [],
};
//export un reducer que tenga logica para las actions

export default function reducer(state = initialState, { type, payload }) {
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
        const filer = payload === "A-Z" ? [...state.dogs].sort()
    default:
      return { ...state };
  }
}
