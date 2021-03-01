import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import AddButton from '../layout/AddButton';
import { addNote, handleAddModalClose } from '../../actions/notesActions';

const AddNoteModal = () => {
  const addModalStatus = useSelector(state => state.notes.setAddModal);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [notesBody, setNotesBody] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = () => {
    if (title === '' || notesBody === '' || category === '') {
      console.log('type in note');
    } else if ((title !== '' || notesBody !== '') && category === '') {
      console.log('type in note 2');
    } else {
      const newNote = {
        title,
        notesBody,
        category,
        date: new Date(),
      };
      console.log('Add notes inside AddNoteModal', newNote);
      dispatch(addNote(newNote));
      dispatch(handleAddModalClose());
      //Clear Fields
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

    AddButton: {
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
          />
          <TextField
            multiline
            className={classes.ModalTextField}
            placeholder='Type Note...'
            type='text'
            InputProps={{ disableUnderline: true }}
            onChange={e => setNotesBody(e.target.value)}
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
            className={classes.AddButton}
            onClick={() => onSubmit()}
          >
            ADD
          </Button>
          <Button
            href='#text-buttons'
            color='secondary'
            className={classes.AddButton}
            onClick={() => dispatch(handleAddModalClose())}
          >
            CANCEL
          </Button>
        </Grid>
      </Paper>
    </div>
  );

  return (
    <div>
      <AddButton />
      <Modal
        open={addModalStatus}
        onClose={() => dispatch(handleAddModalClose())}
        aria-describedby='modal-title'
        aria-labelledby='modal-body'
        aria-labelledby='modal-category'
      >
        {body}
      </Modal>
    </div>
  );
};

export default AddNoteModal;
