import React from 'react';

import { setCurrentId, setCurrentNote } from '../../actions/notesActions';

import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

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

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: '0.1rem',
    marginBottom: '0.1rem',
  },
  body: {
    marginTop: '0.2rem',
    marginBottom: '0.1rem',
  },
}));

const NoteItem = ({ noteBody, title, id, note }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(id);

  return (
    <Note
      className='draggable'
      onClick={() => {
        dispatch(setCurrentId(id));
        dispatch(setCurrentNote(note));
      }}
    >
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.body}>{noteBody}</p>
    </Note>
  );
};

export default NoteItem;
