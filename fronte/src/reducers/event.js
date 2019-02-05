import { ADD_EVENT, GET_EVENTS, UP_EVENTS, DEL_EVENT } from "../actions/type";

const initialState = {
  event_tab: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        event_tab: [action.payload, ...state.event_tab]
      };
    case GET_EVENTS:
      return {
        ...state,
        event_tab: action.payload
      };
    case UP_EVENTS:
      return {
        ...state,
        event_tab: [action.payload, ...state.event_tab]
      };
    case DEL_EVENT:
      return {
        ...state,
        event_tab: state.event_tab.filter(el => el._id !== action.payload)
      };
    default:
      return state;
  }
}
