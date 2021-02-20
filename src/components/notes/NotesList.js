import React from 'react';
import { useSelector } from 'react-redux';

import NoteItem from './NoteItem';

const NotesList = () => {
  const allNotes = useSelector(state => state.notes.allnotes);
  const renderNotesList = allNotes.map(note => {
    return <NoteItem key={note.id} note={note.text} />;
  });
  return renderNotesList;
};

export default NotesList;
