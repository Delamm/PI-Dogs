// herramientas para crear una store con thunk
//createStore
//applyMiddleware
//thunk
//reducer
//compose || ?
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWhitDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWhitDevTools(applyMiddleware(thunk)));

export default store;
