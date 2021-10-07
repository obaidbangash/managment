import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AllReducer from "./reducer/index";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const Store = createStore(AllReducer, composeEnhancers(applyMiddleware(thunk)));
export default Store;
