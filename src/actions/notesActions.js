import {
  ADD_NOTE,
  EDIT_NOTE,
  GET_NOTES,
  SET_LOADING,
  SET_CURRENT_NOTE,
  SET_CURRENT_ID,
  NOTES_ERROR,
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

export const setCurrentId = id => dispatch => {
  dispatch({
    type: SET_CURRENT_ID,
    payload: id,
  });
};

export const setCurrentNote = note => dispatch => {
  dispatch({
    type: SET_CURRENT_NOTE,
    payload: note,
  });
};

export const editNote = id => async dispatch => {
  try {
    setLoading();
  } catch (err) {}
};

export const handleModalClose = () => dispatch => {
  dispatch({ type: 'SET_ADD_MODAL', payload: false });
};

export const setLoading = () => dispatch => {
  dispatch({ type: SET_LOADING });
};
