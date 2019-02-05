import { ADD_REPAS, GET_REPAS,UP_REPAS ,DEL_REPAS} from "../actions/type";

const initialState = {
  repas_tab: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_REPAS:
      return {
        ...state,
        repas_tab: [action.payload, ...state.repas_tab]
      };
    case GET_REPAS:
      return {
        ...state,
        repas_tab: action.payload
      };
      case UP_REPAS:
      return {
        ...state,
        repas_tab: [action.payload, ...state.repas_tab]
      };
      case DEL_REPAS:
      return {
        ...state,
        repas_tab:  state.repas_tab.filter(el => el._id !=action.payload)
      };
    default:
      return state;
  }
}
