import { FETCH_PAGE } from "store/types";

const initialState = {};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
