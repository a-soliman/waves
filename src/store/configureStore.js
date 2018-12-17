import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import productsReducer from "../reducers/products";
import errorReducer from "../reducers/error";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      products: productsReducer,
      errors: errorReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
