import { ADD_REPAS, GET_REPAS, ITEMS_LOADING, UP_REPAS,DEL_REPAS } from "./type";
import axios from "axios";
export const addRepas = repas => dispatch => {
  axios.post(" http://localhost:3007/Repas", repas).then(res =>
    dispatch({
      type: ADD_REPAS,
      payload: res.data
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
 
export const getRepas = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get(" http://localhost:3007/Repas/").then(res =>
    dispatch({
      type: GET_REPAS,
      payload: res.data
    })
  );
};

export const updateRepas = (repas, idref) => dispatch => {
  dispatch(setItemsLoading());
  axios.put(` http://localhost:3007/Repas/${idref}`,repas).then(res =>
    dispatch({
      type: UP_REPAS,
      payload: res.data
    })
  );
};

export const deleteRepas= event => dispatch =>  {
  axios.delete(`http://localhost:3007/Repas/${event}`).then(res =>
  dispatch({
    type: DEL_REPAS,
    payload: res.data
  })
  );
  };
