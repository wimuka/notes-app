import {
  GET_NOTES,
  ADD_NOTE,
  EDIT_NOTE,
  FILTER_CATEGORY,
  CLEAR_FILTER_CATEGORY,
  SET_CURRENT_NOTE,
  SET_ADD_MODAL,
  SET_EDIT_MODAL,
  SET_LOADING,
  NOTES_ERROR,
} from '../actions/types';

//Standard setup
const initialState = {
  allnotes: [],
  setAddModal: false,
  setEditModal: false,
  loading: false,
  currentNote: [],
  error: null,
  filteredCategory: [],
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

    case EDIT_NOTE:
      //find note by id in allnotess state => change that note to edited version
      console.log(action.payload.id);

      return {
        ...state,
        allnotes: state.allnotes.map(note =>
          note.id === action.payload.id ? action.payload : note
        ),
      };

    case FILTER_CATEGORY:
      return {
        ...state,
        filteredCategory: state.allnotes.filter(
          note => note.category === action.payload
        ),
      };
    case CLEAR_FILTER_CATEGORY:
      return {
        ...state,
        filteredCategory: [],
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
    case SET_EDIT_MODAL:
      return {
        ...state,
        setEditModal: action.payload,
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
