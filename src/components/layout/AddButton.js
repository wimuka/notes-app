import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddNoteButton = styled(Button)({
  backgroundColor: '#ff6e40',
  width: '8rem',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#f4511e',
  },
});

const AddButton = () => {
  const dispatch = useDispatch();
  const addModalStatus = useSelector(state => state.notes.setAddModal);

  const onBtnClick = () => {
    console.log(addModalStatus);
    dispatch({ type: 'SET_ADD_MODAL', payload: !addModalStatus });
  };

  return (
    <AddNoteButton
      variant='contained'
      color='primary'
      startIcon={<AddIcon fontSize='small' />}
      onClick={() => onBtnClick()}
    >
      ADD NOTE
    </AddNoteButton>
  );
};

export default AddButton;
