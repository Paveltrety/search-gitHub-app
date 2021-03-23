import { ADD_INFO_PROJECTS } from "./dataInfoAction";

let initialState = {
  itemsResult: null,
};
const dataInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO_PROJECTS:
      return {
        ...state,
        itemsResult: action.payload,
      };
    default:
      return state;
  }
};

export default dataInfoReducer;
