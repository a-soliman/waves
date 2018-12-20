import {
  GET_ERRORS,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
  GET_WOODS
} from "../actions/types";
import isEmpty from "../validation/is-empty";

const initalState = {
  bySell: [],
  byArrival: [],
  brands: [],
  woods: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_SELL:
      return {
        ...state,
        bySell: action.payload
      };

    case GET_PRODUCTS_BY_ARRIVAL:
      return {
        ...state,
        byArrival: action.payload
      };

    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload
      };

    case GET_WOODS:
      return {
        ...state,
        woods: action.payload
      };

    default:
      return state;
  }
};
