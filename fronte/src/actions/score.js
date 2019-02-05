import { ADD_SCORE, GET_SCORE } from "./type";
import axios from "axios";
export const addScore = score => dispatch => {
  axios.post(" http://localhost:3007/Note", score).then(res =>
    dispatch({
      type: ADD_SCORE,
      payload: res.data
    })
  );
};
export const getScore = score => dispatch => {
  axios.post(" http://localhost:3007/Note", score).then(res =>
    dispatch({
      type: GET_SCORE,
      payload: res.data
    })
  );
};
