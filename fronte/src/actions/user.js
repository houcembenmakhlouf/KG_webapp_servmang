import {
  ADD_USER,
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_USERS,
  DEL_USER,
  ITEMS_LOADING,
  UP_USER
} from "./type";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const addUser = user => dispatch => {
  axios.post(" http://localhost:3007/User", user).then(res =>
    dispatch({
      type: ADD_USER,
      payload: res.data
    })
  );
};

// Login - Get User Token
export const loginUser = user => dispatch => {
  axios
    .post("http://localhost:3007/User/login", user)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const getUsers = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get(" http://localhost:3007/User").then(res =>
    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  );
};

export const deleteUser = event => dispatch => {
  axios.delete(`http://localhost:3007/User/${event}`).then(res =>
    dispatch({
      type: DEL_USER,
      payload: res.data
    })
  );
};

export const updateUser = (event, idref) => dispatch => {
  dispatch(setItemsLoading());
  axios.put(` http://localhost:3007/Event/${idref}`, event).then(res =>
    dispatch({
      type: UP_USER,
      payload: res.data
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
