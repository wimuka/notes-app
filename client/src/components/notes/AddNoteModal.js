import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addNote,
  handleAddModalClose,
  newDate,
} from '../../actions/notesActions';

import AddButton from '../layout/AddButton';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const AddNoteModal = () => {
  const dispatch = useDispatch();
  const addModalStatus = useSelector(state => state.notes.setAddModal);

  const [title, setTitle] = useState('');
  const [notesBody, setNotesBody] = useState('');
  const [category, setCategory] = useState('');
  const [bodyError, setBodyError] = useState(false);
  const [catError, setCatError] = useState(false);

  const onSubmit = () => {
    if (notesBody === '' && category === '') {
      setBodyError(true);
      setCatError(true);
    } else if (category === '') {
      setCatError(true);
      setBodyError(false);
    } else if (notesBody === '') {
      setBodyError(true);
      setCatError(false);
    } else {
      const newNote = {
        title,
        notesBody,
        category,
        date: newDate(),
      };
      dispatch(addNote(newNote));
      dispatch(handleAddModalClose());
      //Clear Fields
      setTitle('');
      setNotesBody('');
      setCategory('');
      setBodyError(false);
      setCatError(false);
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
      '& .MuiFormLabel-root ': {
        marginLeft: theme.spacing(1),
      },
    },

    ModalTextField: {
      backgroundColor: '#f5f5f5',
      width: '96%',
      paddingLeft: '0.5rem',
      marginTop: '0.5rem',
      borderRadius: '0.3rem',
      height: '10rem',
      overflowY: 'auto',
    },

    ModalInputBase: {
      backgroundColor: '#f5f5f5',
      '& .MuiInputBase-input': {
        marginLeft: theme.spacing(1),
      },
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
    },
    CatetogySelect: {
      width: '12rem',
      marginTop: '0.5rem',
      paddingLeft: '0.3rem',
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
            inputProps={{ maxLength: 18 }}
          />
          <TextField
            error={bodyError ? true : false}
            multiline
            className={classes.ModalTextField}
            label='Type note...'
            // type='text'
            InputProps={{ disableUnderline: true }}
            onChange={e => setNotesBody(e.target.value)}
            type='checkbox'
          />
          <Grid>
            <InputLabel
              error={catError ? true : false}
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
            onClick={() => {
              dispatch(handleAddModalClose());
              setBodyError(false);
              setCatError(false);
              setCategory('');
            }}
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
        aria-labelledby={('modal-add-body', 'modal-add-category')}
      >
        {body}
      </Modal>
    </div>
  );
};

export default AddNoteModal;
