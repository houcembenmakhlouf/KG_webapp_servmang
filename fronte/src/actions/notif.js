import { ADD_NOTIF, GET_NOTIF, ITEMS_LOADING, DEL_NOTIF ,UP_NOTIF} from "./type";
import axios from "axios";
export const addNotif = notif => dispatch => {
  axios.post(" http://localhost:3007/Notification", notif).then(res =>
    dispatch({
      type: ADD_NOTIF,
      payload: res.data
    })
  );
};
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

export const getNotif = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get(" http://localhost:3007/Notification/").then(res =>
    dispatch({
      type: GET_NOTIF,
      payload: res.data
    })
  );
};

export const deleteNotif = event => dispatch => {
  axios.delete(`http://localhost:3007/Notification/${event}`).then(res =>
    dispatch({
      type: DEL_NOTIF,
      payload: res.data
    })
  );
};

export const updateNotif = (event,idref) => dispatch => {
  
  dispatch(setItemsLoading());
  axios.put(` http://localhost:3007/Notification/${idref}` ,event).then(res =>
    dispatch({
      type: UP_NOTIF,
      payload: res.data
    })
  );
};
