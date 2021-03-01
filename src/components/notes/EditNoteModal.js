import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { editNote, handleEditModalClose } from '../../actions/notesActions';
import EditButton from '../layout/EditButton';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Modal from '@material-ui/core/Modal';

const EditNoteModal = ({ note }) => {
  const dispatch = useDispatch();

  const editModalStatus = useSelector(state => state.notes.setEditModal);
  const currentNote = useSelector(state => state.notes.currentNote);
  const currentNoteId = useSelector(state => state.notes.currentNote.id);

  const [title, setTitle] = useState('');
  const [notesBody, setNotesBody] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setNotesBody(currentNote.notesBody);
      setCategory(currentNote.category);
    }
  }, [currentNote]);

  const onSubmit = () => {
    if ((title === '' || notesBody === '') && category === '') {
      console.log('type in note');
    } else {
      const updateNote = {
        id: currentNote.id,
        title,
        notesBody,
        category,
        date: `Edited: ${new Date()}`,
      };
      console.log('Update note inside AddNoteModal', updateNote);

      dispatch(editNote(updateNote, currentNoteId));
      dispatch(handleEditModalClose());

      setTitle('');
      setNotesBody('');
      setCategory('');
    }
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: '10rem',
      },
      height: '23rem',
    },

    ModalTextField: {
      backgroundColor: '#f5f5f5',
      width: '96%',
      paddingLeft: '1rem',
      marginTop: '0.5rem',
      borderRadius: '0.3rem',
      height: '10rem',
      overflowY: 'auto',
    },

    ModalInputBase: {
      backgroundColor: '#f5f5f5',
      paddingLeft: '1rem',
      width: '100%',
      marginTop: '0.5rem',
      borderRadius: '0.3rem',
    },

    AddModalPaper: {
      width: '25rem',
      padding: '1rem',
    },

    SubmitButton: {
      marginTop: '1.5rem',
    },

    CategoryLabel: {
      marginTop: '1rem',
      paddingLeft: '1rem',
    },
    CatetogySelect: {
      width: '12rem',
      marginTop: '0.5rem',
    },
  }));
  const classes = useStyles();

  const body = (
    <div className={classes.root}>
      <Paper id='simple-modal-description' className={classes.AddModalPaper}>
        <Grid>
          <InputBase
            className={classes.ModalInputBase}
            placeholder='Add Title'
            type='text'
            name='message'
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <TextField
            multiline
            className={classes.ModalTextField}
            placeholder='Type Note...'
            type='text'
            InputProps={{ disableUnderline: true }}
            onChange={e => setNotesBody(e.target.value)}
            value={notesBody}
          />
          <Grid>
            <InputLabel
              className={classes.CategoryLabel}
              htmlFor='category-select'
            >
              Select Category
            </InputLabel>
            <Select
              native
              className={classes.CatetogySelect}
              inputProps={{ id: 'category-select' }}
              onChange={e => setCategory(e.target.value)}
              value={category}
            >
              <option aria-label='None' value='' />
              <option value={'home'}>Home</option>
              <option value={'work'}>Work</option>
              <option value={'personal'}>Personal</option>
            </Select>
          </Grid>
          <Button
            href='#text-buttons'
            color='primary'
            className={classes.SubmitButton}
            onClick={() => onSubmit()}
          >
            EDIT
          </Button>
          <Button
            href='#text-buttons'
            color='secondary'
            className={classes.SubmitButton}
            onClick={() => dispatch(handleEditModalClose())}
          >
            CANCEL
          </Button>
        </Grid>
      </Paper>
    </div>
  );

  return (
    <div>
      <Modal
        open={editModalStatus}
        onClose={() => handleEditModalClose()}
        aria-describedby='modal-title'
        aria-labelledby='modal-body'
        aria-labelledby='modal-category'
      >
        {body}
      </Modal>
    </div>
  );
};
export default EditNoteModal;
