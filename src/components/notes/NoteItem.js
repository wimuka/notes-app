import React from 'react';

import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const Note = styled(Paper)({
  backgroundColor: '#ffa000',
  height: '15%',
  width: '15%',
  overflow: 'hidden',
  userSelect: 'none',
  touchAction: 'none',
  padding: '0.5rem',
  marginLeft: '1.4rem',
  marginTop: '1.7rem',
});

const NoteItem = ({ note }) => {
  return <Note className='draggable'>{note}</Note>;
};

export default NoteItem;
