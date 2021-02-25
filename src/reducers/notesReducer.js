import {
  GET_NOTES,
  ADD_NOTE,
  EDIT_NOTE,
  SET_CURRENT_NOTE,
  SET_CURRENT_ID,
  SET_ADD_MODAL,
  SET_LOADING,
  NOTES_ERROR,
} from '../actions/types';

//Standard setup
const initialState = {
  allnotes: [],
  setAddModal: false,
  loading: false,
  currentId: null,
  currentNote: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        allnotes: [...state.allnotes, action.payload],
        loading: false,
      };

    case GET_NOTES:
      return {
        ...state,
        allnotes: action.payload,
        loading: false,
      };

    // case EDIT_NOTE:
    //   return {
    //     ...state,
    //     current: action.payload,
    //   };
    case SET_CURRENT_ID:
      return {
        ...state,
        currentId: action.payload,
      };

    case SET_CURRENT_NOTE:
      return {
        ...state,
        currentNote: action.payload,
      };

    case SET_ADD_MODAL:
      return {
        ...state,
        setAddModal: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case NOTES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
