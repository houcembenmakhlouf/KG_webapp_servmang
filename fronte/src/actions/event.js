import { ADD_EVENT ,ITEMS_LOADING,GET_EVENTS,UP_EVENTS,DEL_EVENT} from "./type";
import axios from "axios";
export const addEvent = event => dispatch => {
  axios.post(" http://localhost:3007/Event", event).then(res =>
    dispatch({
      type: ADD_EVENT,
      payload: res.data
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

export const getEvents = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get(" http://localhost:3007/Event/").then(res =>
    dispatch({
      type: GET_EVENTS,
      payload: res.data
    })
  );
};


export const updateEvent = (event,idref) => dispatch => {
  
  dispatch(setItemsLoading());
  axios.put(` http://localhost:3007/Event/${idref}` ,event).then(res =>
    dispatch({
      type: UP_EVENTS,
      payload: res.data
    })
  );
};
export const deleteEvent = event => dispatch =>  {
axios.delete(`http://localhost:3007/Event/${event}`).then(res =>
dispatch({
  type: DEL_EVENT,
  payload: res.data
})
);
};

export const addOrUpdateEvent = (event) => (dispatch, ownProps) => {
  
  if(ownProps.type === 'ADD')
  
    addEvent(event)
  else
  updateEvent(event,dispatch)
}