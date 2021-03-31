import React from 'react';
import { useDispatch } from 'react-redux';

import {
  setEditModal,
  setCurrentNote,
  setId,
  setDelAlert,
} from '../../actions/notesActions';

import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Note = styled(Paper)(({ theme }) => ({
  marginBottom: '1.5rem',
  userSelect: 'none',
  touchAction: 'none',
  padding: '0.5rem',
  marginTop: '1.7rem',
  borderRadius: '0.2rem',
  height: 'max-content',
  // overflow: 'hidden',
}));

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: '0.1rem',
    paddingBottom: '0.1rem',
    display: 'flex',
  },

  titleTypo: { fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' },

  body: {
    marginTop: '0.2rem',
    textAlign: 'left',
  },
  button: {
    paddingLeft: '0.2rem',
    paddingRight: '0.2rem',
  },

  dateTypo: {
    marginTop: '0.7rem',
  },
}));

const NoteItem = ({ noteBody, title, note, index, id, date }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onEdit = () => {
    dispatch(setCurrentNote(note));
    dispatch(setEditModal());
  };

  const handleClick = () => {
    dispatch(setDelAlert(true));
    dispatch(setId(id));
  };

  return (
    <Note
      style={
        note.category === 'home'
          ? { backgroundColor: '#ffbf00' }
          : note.category === 'work'
          ? { backgroundColor: '#42a5f4' }
          : note.category === 'personal'
          ? { backgroundColor: '#46ac31' }
          : { backgroundColor: '#5c6bc0' }
      }
      key={`item-${note}`}
      index={index}
      value={note}
    >
      <Grid>
        <Grid
          container
          style={{ justifyContent: 'space-between', display: 'flex' }}
        >
          <Grid className={classes.title}>
            <Typography className={classes.titleTypo} variant='subtitle1'>
              {title}
            </Typography>
          </Grid>
          <Grid>
            <IconButton
              aria-label='edit note'
              className={classes.button}
              disableRipple
              color='primary'
              onClick={() => onEdit()}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label='delete note'
              disableRipple
              color='primary'
              onClick={() => handleClick()}
              className={classes.button}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            style={{ wordWrap: 'break-word' }}
            variant='body1'
            className={classes.body}
          >
            {noteBody}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Typography className={classes.dateTypo} variant='body1'>
          {date}
        </Typography>
      </Grid>
    </Note>
  );
};

export default NoteItem;
