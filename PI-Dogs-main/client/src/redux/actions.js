import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_ALL_TEMPERS = "GET_ALL_TEMPERS";
export const GET_DOG_NAME = "GET_DOG_NAME";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_WEIGHT = "FILTER_BY_WEIGHT";
export const FILTER_BY_TEMPERS = "FILTER_BY_TEMPERS";
export const FILTER_CREATED_DOG = "FILTER_CREATED_DOG";
export const POST_DOG = "POST_DOG";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

// ACTIONS CREATORS

export function getAllDogs() {
  return async function (dispatch) {
    var get = await axios.get("/dogs");
    return dispatch({ type: GET_ALL_DOGS, payload: get.data });
  };
}

export function getTempers() {
  return async function (dispatch) {
    var get = await axios.get("/temperaments");
    return dispatch({ type: GET_ALL_TEMPERS, payload: get.data });
  };
}

export function getDogName(name) {
  return async function (dispatch) {
    try {
      var get = await axios.get(`/dogs?name=${name}`);
      return dispatch({ type: GET_DOG_NAME, payload: get.data });
    } catch (error) {
      console.log(error);
      alert("No dog with that name was found");
    }
  };
}

export function getDogId(id) {
  return async function (dispatch) {
    try {
      var get = await axios.get(`/dogs/${id}`);
      return dispatch({ type: GET_DOG_DETAIL, payload: get.data });
    } catch (error) {
      console.log(error);
      alert("The detail could not be obtained");
    }
  };
}

export function postDog(data) {
  return async function () {
    const post = await axios.post("/dogs", data);
    return post;
  };
}

export function filterWeight(payload) {
  return {
    type: FILTER_BY_WEIGHT,
    payload,
  };
}

export function filterTemper(payload) {
  return {
    type: FILTER_BY_TEMPERS,
    payload,
  };
}

export function filterDBDog(payload) {
  return {
    type: FILTER_CREATED_DOG,
    payload,
  };
}

export function filterByName(payload) {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
}

export function clearDetail() {
  return {
    type: CLEAR_DETAIL,
  };
}
