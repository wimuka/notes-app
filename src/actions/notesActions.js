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
  NOTES_ERROR,
} from './types';

export const getNotes = () => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const res = await fetch('/notes');
    const data = await res.json();

    dispatch({
      type: GET_NOTES,
      payload: data,
    });
  } catch (e) {
    dispatch({ type: NOTES_ERROR, payload: e });
  }
};

export const addNote = note => async dispatch => {
  try {
    //Get all notes and add new note, then dispatch action with to reducer to add note to state
    const res = await fetch('/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_NOTE,
      payload: data,
    });
    console.log(data);
  } catch (e) {
    dispatch({ type: NOTES_ERROR, payload: e });
  }
};

export const editNote = (note, id) => async dispatch => {
  const res = await fetch(`/notes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  dispatch({
    type: EDIT_NOTE,
    payload: data,
  });
};

export const deleteNote = id => async dispatch => {
  try {
    await fetch(`/notes/${id}`, {
      method: 'DELETE',
    });
    dispatch({ type: DELETE_NOTE, payload: id });
  } catch (e) {
    dispatch({ type: NOTES_ERROR, payload: e });
  }
};

export const filteredCategory = category => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    //fetch notes with specific category using query strings
    const res = await fetch(`/notes?category=${category}`);
    const data = await res.json();
    dispatch({ type: FILTER_CATEGORY, payload: data });
  } catch (e) {
    dispatch({ type: NOTES_ERROR, payload: e });
  }
};

export const filteredSearch = text => async dispatch => {
  dispatch({ type: SET_LOADING });
  console.log(text, 'action');
  //fetch notes that match search text using query strings
  if (text === '') {
    dispatch({ type: CLEAR_SEARCH, payload: '' });
  } else {
    const res = await fetch(`/notes?q=${text}`);
    console.log(res, 'action');
    const data = await res.json();
    try {
      dispatch({ type: FILTER_SEARCH, payload: data });
    } catch (e) {
      dispatch({ type: NOTES_ERROR, payload: e });
    }
  }
};

export const filteredCatBool = bool => dispatch => {
  try {
    dispatch({ type: FILTERED_CAT_BOOL, payload: bool });
  } catch (e) {
    dispatch({ type: NOTES_ERROR, payload: e });
  }
};

export const setEditModal = () => dispatch =>
  dispatch({ type: SET_EDIT_MODAL, payload: true });

export const setAddModal = () => dispatch =>
  dispatch({ type: SET_ADD_MODAL, payload: true });

export const setDelAlert = bool => dispatch =>
  dispatch({ type: SET_DEL_ALERT, payload: bool });

export const setCurrentNote = note => dispatch => {
  dispatch({
    type: SET_CURRENT_NOTE,
    payload: note,
  });
};

export const setSearchValue = text => dispatch => {
  dispatch({
    type: SET_SEARCH_VALUE,
    payload: text,
  });
};

export const setId = id => dispatch => {
  dispatch({ type: SET_ID, payload: id });
};

export const clearFilteredCategory = () => dispatch => {
  try {
    dispatch({ type: CLEAR_FILTER_CATEGORY });
  } catch (e) {
    dispatch({ type: NOTES_ERROR, payload: e });
  }
};

export const clearSearch = () => dispatch => {
  dispatch({ type: CLEAR_SEARCH, payload: '' });
};

export const handleAddModalClose = () => dispatch => {
  dispatch({ type: SET_ADD_MODAL, payload: false });
};

export const handleEditModalClose = () => dispatch => {
  dispatch({ type: SET_EDIT_MODAL, payload: false });
};

export const newDate = () => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const month = monthNames[new Date().getMonth()];
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  return month + ' ' + day + ', ' + year;
};
