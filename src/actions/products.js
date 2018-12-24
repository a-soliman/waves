import axios from "axios";
import {
  GET_ERRORS,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
  GET_WOODS,
  GET_PRODUCTS_TO_SHOP
} from "./types";
import { history } from "../routers/AppRouter";

export const getProductsByArrival = () => dispatch => {
  axios
    .get("/api/products/query?sortBy=createdAt&order=desc&limit=4")
    .then(res =>
      dispatch({
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getProductsBySell = () => dispatch => {
  axios
    .get("/api/products/query?sortBy=sold&order=desc&limit=4")
    .then(res =>
      dispatch({
        type: GET_PRODUCTS_BY_SELL,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getBrands = () => dispatch => {
  axios
    .get("/api/brands")
    .then(res => dispatch({ type: GET_BRANDS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const getWoods = () => dispatch => {
  axios
    .get("/api/woods")
    .then(res => dispatch({ type: GET_WOODS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const getProductsToShop = ({
  skip,
  limit,
  filters = [],
  previousState = []
}) => dispatch => {
  const data = { skip, limit, filters };
  axios
    .post(`/api/shop`, data)
    .then(res => {
      dispatch({
        type: GET_PRODUCTS_TO_SHOP,
        payload: {
          size: res.data.size,
          products: [...previousState, ...res.data.products]
        }
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
