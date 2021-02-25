import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getNotes } from '../../actions/notesActions';

import NoteItem from './NoteItem';

const Notes = () => {
  const allNotes = useSelector(state => state.notes.allnotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
    console.log('works in NotesDash');
  }, []);

  return allNotes.map(note => {
    return (
      <NoteItem
        key={note.id}
        noteBody={note.notesBody}
        title={note.title}
        id={note.id}
        note={note}
      />
    );
  });
};

export default Notes;
