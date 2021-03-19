import {
  GET_NOTES,
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  FILTER_CATEGORY,
  FILTER_SEARCH,
  FILTERED_CAT_BOOL,
  SET_LOADING,
  SET_EDIT_MODAL,
  SET_ADD_MODAL,
  SET_DEL_ALERT,
  SET_CURRENT_NOTE,
  SET_SEARCH_VALUE,
  SET_ID,
  CLEAR_FILTER_CATEGORY,
  CLEAR_SEARCH,
  REORDER_CATEGORY_NOTES,
  REORDER_ALL_NOTES,
  NOTES_ERROR,
} from '../actions/types';

//Standard setup
const initialState = {
  allnotes: false,
  setAddModal: false,
  setEditModal: false,
  delAlert: false,
  loading: false,
  currentNote: [],
  error: null,
  filteredCategory: [],
  filteredSearch: [],
  filteredCatBool: false,
  searchText: '',
  id: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        allnotes: action.payload,
        loading: false,
      };
    case ADD_NOTE:
      if (state.filteredCatBool) {
        return {
          ...state,
          allnotes: [...state.allnotes, action.payload],
          filteredCategory: [...state.filteredCategory, action.payload],
          loading: false,
        };
      } else
        return {
          ...state,

          allnotes: [...state.allnotes, action.payload],
          loading: false,
        };

    case EDIT_NOTE:
      //find note by id in allnotess state => change that note to edited version
      return {
        ...state,
        allnotes: state.allnotes.map(note =>
          note.id === action.payload.id ? action.payload : note
        ),
        filteredCategory: state.filteredCategory.map(note =>
          note.id === action.payload.id ? action.payload : note
        ),
        loading: false,
      };

    case DELETE_NOTE:
      return {
        ...state,
        allnotes: state.allnotes.filter(note => note.id !== action.payload),
        filteredCategory: state.filteredCategory.filter(
          note => note.id !== action.payload
        ),
      };

    case FILTER_CATEGORY:
      return {
        ...state,
        filteredCategory: action.payload,
        loading: false,
      };

    case FILTER_SEARCH:
      return {
        ...state,
        filteredSearch: action.payload,
        loading: false,
      };

    case FILTERED_CAT_BOOL:
      return {
        ...state,
        filteredCatBool: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_EDIT_MODAL:
      return {
        ...state,
        setEditModal: action.payload,
      };

    case SET_ADD_MODAL:
      return {
        ...state,
        setAddModal: action.payload,
      };
    case SET_DEL_ALERT:
      return {
        ...state,
        delAlert: action.payload,
      };

    case SET_CURRENT_NOTE:
      return {
        ...state,
        currentNote: action.payload,
      };

    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchText: action.payload,
      };

    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };

    case CLEAR_FILTER_CATEGORY:
      return {
        ...state,
        filteredCategory: [],
        filteredCatBool: false,
        loading: false,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        filteredSearch: [],
        searchText: '',
        loading: false,
      };

    case REORDER_ALL_NOTES:
      return {
        ...state,
        allnotes: action.payload,
      };

    case REORDER_CATEGORY_NOTES:
      return {
        ...state,
        filteredCategory: action.payload,
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
