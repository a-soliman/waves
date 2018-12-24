import {
  GET_ERRORS,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
  GET_WOODS,
  GET_PRODUCTS_TO_SHOP
} from "../actions/types";
import isEmpty from "../validation/is-empty";

const initalState = {
  bySell: [],
  byArrival: [],
  brands: [],
  woods: [],
  toShop: []
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

    case GET_PRODUCTS_TO_SHOP:
      return {
        ...state,
        toShop: action.payload.products,
        toShopSize: action.payload.size
      };

    default:
      return state;
  }
};
