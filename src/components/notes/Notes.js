import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getNotes } from '../../actions/notesActions';

import NoteItem from './NoteItem';

const Notes = () => {
  const allNotes = useSelector(state => state.notes.allnotes);
  const filteredCategory = useSelector(state => state.notes.filteredCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return filteredCategory.length > 0
    ? filteredCategory.map(note => {
        return (
          <NoteItem
            key={note.id}
            noteBody={note.notesBody}
            title={note.title}
            id={note.id}
            note={note}
          />
        );
      })
    : allNotes.map(note => {
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
