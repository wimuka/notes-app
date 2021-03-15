import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';

import { setDelAlert, deleteNote, setId } from '../../actions/notesActions';

import NoteItem from './NoteItem';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Snackbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
  masonryGrid: {
    display: 'flex',
    [theme.breakpoints.up('xl')]: {
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(-1.5),
    },
    width: '97%',
  },
  masonryColumn: {
    [theme.breakpoints.up('xs')]: {
      paddingLeft: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(3),
    },
    backgroundClip: 'padding-box',
  },
}));

const SortableNotes = ({ allNotes, filteredCategory }) => {
  const dispatch = useDispatch();
  const filteredSearch = useSelector(state => state.notes.filteredSearch);

  const delAlert = useSelector(state => state.notes.delAlert);
  const id = useSelector(state => state.notes.id);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const breakpointCols = {
    default: 3,
    [theme.breakpoints.values.xl]: 3,
    [theme.breakpoints.values.lg]: 2,
    [theme.breakpoints.values.md]: 2,
    [theme.breakpoints.values.sm]: 1,
    [theme.breakpoints.values.xs]: 1,
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const snackbar = (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message='Note deleted'
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );

  const body = (
    <Dialog
      open={delAlert}
      onClose={() => dispatch(setDelAlert(false))}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {'Are you sure you want to delete this note?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Note will be permanently deleted
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            dispatch(deleteNote(id));
            dispatch(setDelAlert(false));
            dispatch(setId(null));
            handleClick();
          }}
          color='primary'
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            dispatch(setDelAlert(false));
            dispatch(setId(null));
          }}
          color='primary'
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Fragment>
      <Masonry
        columnClassName={classes.masonryColumn}
        className={classes.masonryGrid}
        breakpointCols={breakpointCols}
      >
        {filteredSearch.length > 0
          ? filteredSearch.map((note, index) => {
              return (
                <NoteItem
                  key={`item-${note.id}`}
                  noteBody={note.notesBody}
                  title={note.title}
                  id={note.id}
                  value={note}
                  index={index}
                  note={note}
                  date={note.date}
                />
              );
            })
          : filteredCategory.length > 0
          ? filteredCategory.map((note, index) => {
              return (
                <NoteItem
                  key={`item-${note.id}`}
                  noteBody={note.notesBody}
                  title={note.title}
                  id={note.id}
                  value={note}
                  index={index}
                  note={note}
                  date={note.date}
                />
              );
            })
          : allNotes.length > 0
          ? allNotes.map((note, index) => {
              return (
                <NoteItem
                  key={`item-${note.id}`}
                  noteBody={note.notesBody}
                  title={note.title}
                  id={note.id}
                  value={note}
                  index={index}
                  note={note}
                  date={note.date}
                />
              );
            })
          : null}
      </Masonry>
      {body}
      {snackbar}
    </Fragment>
  );
};

export default SortableNotes;
