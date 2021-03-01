import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import EditButton from '../layout/EditButton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setEditModal, setCurrentNote } from '../../actions/notesActions';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

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

const NoteItem = ({ noteBody, title, note }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onBtnClick = async () => {
    await (dispatch(setCurrentNote(note)), console.log(1));
    await (dispatch(setEditModal()), console.log(2));
  };
  return (
    <Note className='draggable'>
      <Grid>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.body}>{noteBody}</p>
      </Grid>
      <Grid>
        {/* <EditButton note={note} /> */}

        <IconButton disableRipple color='primary' onClick={() => onBtnClick()}>
          <EditIcon />
        </IconButton>
      </Grid>
    </Note>
  );
};

export default NoteItem;
