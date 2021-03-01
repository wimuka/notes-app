import {
  ADD_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  FILTER_CATEGORY,
  SET_LOADING,
  SET_CURRENT_NOTE,
  NOTES_ERROR,
  SET_EDIT_MODAL,
  SET_ADD_MODAL,
  CLEAR_FILTER_CATEGORY,
} from './types';

export const getNotes = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('http://localhost:5000/notes');
    const data = await res.json();
    dispatch({
      type: GET_NOTES,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: NOTES_ERROR, payload: err.response.statusText });
  }
};

export const addNote = note => async dispatch => {
  try {
    setLoading();

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
  } catch (err) {
    dispatch({ type: NOTES_ERROR, payload: err.response.statusText });
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

  try {
    setLoading();
    dispatch({
      type: EDIT_NOTE,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: NOTES_ERROR, payload: err.response.statusText });
  }
};

export const filteredCategory = category => async dispatch => {
  try {
    dispatch({ type: FILTER_CATEGORY, payload: category });
  } catch (err) {
    dispatch({ type: NOTES_ERROR, payload: err.response.statusText });
  }
};

export const clearFilteredCategory = () => dispatch => {
  try {
    dispatch({ type: CLEAR_FILTER_CATEGORY });
  } catch (err) {
    dispatch({ type: NOTES_ERROR, payload: err.response.statusText });
  }
};

export const setCurrentNote = note => dispatch => {
  dispatch({
    type: SET_CURRENT_NOTE,
    payload: note,
  });
};

export const setAddModal = () => dispatch =>
  dispatch({ type: SET_ADD_MODAL, payload: true });

export const setEditModal = () => dispatch =>
  dispatch({ type: SET_EDIT_MODAL, payload: true });

export const handleAddModalClose = () => dispatch => {
  dispatch({ type: SET_ADD_MODAL, payload: false });
};

export const handleEditModalClose = () => dispatch => {
  dispatch({ type: SET_EDIT_MODAL, payload: false });
};

export const setLoading = () => dispatch => {
  dispatch({ type: SET_LOADING });
};
