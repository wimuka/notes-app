import { ADD_NOTE, SET_ADD_MODAL } from '../actions/types';

//Standard setup
const initialState = {
  allnotes: [],
  setAddModal: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        allnotes: [action.payload],
      };
    case SET_ADD_MODAL:
      return {
        ...state,
        setAddModal: action.payload,
      };
    default:
      return state;
  }
};
