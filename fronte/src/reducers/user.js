import { ADD_USER, SET_CURRENT_USER, GET_USERS,DEL_USER,UP_USER } from "../actions/type";
import isEmpty from "../validation/is-empty";

const initialState = {
  user_tab: [],
  user_connected: {},
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        user_tab: action.payload
        //loading: false
      };
    case ADD_USER:
      return {
        ...state,
        user_tab: [action.payload, ...state.user_tab]
      };
      case DEL_USER:
      return {
        ...state,

        user_tab:  state.user_tab.filter(el => el._id !=action.payload)
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user_connected: action.payload
      };
      case UP_USER:
      return {
        ...state,
        user_tab: [action.payload, ...state.user_tab]
       };
      
    // case ITEMS_LOADING:
    // return {
    //   ...state,
    //   loading: true
    // };
    default:
      return state;
  }
}
