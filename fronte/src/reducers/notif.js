import { ADD_NOTIF, GET_NOTIF ,UP_NOTIF,DEL_NOTIF} from "../actions/type";

const initialState = {
  notif_tab: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIF:
      return {
        ...state,
        notif_tab: [action.payload, ...state.notif_tab]
      };
    case GET_NOTIF:
      return {
        ...state,
        notif_tab: action.payload
      };
      case UP_NOTIF:
      return {
        ...state,
        notif_tab: [action.payload, ...state.notif_tab]
      };
      case DEL_NOTIF:
      return {
        ...state,
        notif_tab:  state.notif_tab.filter(el => el._id !=action.payload) 
      };
    default:
      return state;
  }
}
