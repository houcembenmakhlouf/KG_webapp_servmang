import { ADD_SCORE, GET_SCORE } from "../actions/type";

const initialState = {
  score_tab: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        score_tab: [action.payload, ...state.score_tab]
      };
    case GET_SCORE:
      return {
        ...state,
        score_tab: [action.payload, ...state.score_tab]
      };

    default:
      return state;
  }
}
