import React from 'react';
import Modal from '@material-ui/core/Modal';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';

import AddButton from '../layout/AddButton';

const AddNoteModal = () => {
  const addModalStatus = useSelector(state => state.notes.setAddModal);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch({ type: 'SET_ADD_MODAL', payload: false });
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20rem',
      height: '15rem',
    },
  }));

  const ModalPaper = styled(Paper)({
    width: '25rem',
    padding: '1rem',
  });
  const classes = useStyles();

  const body = (
    <div className={classes.root}>
      <ModalPaper id='simple-modal-description'>
        <Grid>
          <Grid row>
            <InputBase placeholder='Title' type='text' name='message' />
          </Grid>
          <Grid row>
            <InputBase placeholder='Type Note...' type='text' name='message' />
          </Grid>
        </Grid>
      </ModalPaper>
    </div>
  );

  return (
    <div>
      <AddButton />
      <Modal
        open={addModalStatus}
        onClose={() => handleModalClose()}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default AddNoteModal;
