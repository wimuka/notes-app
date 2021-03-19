import React from 'react';
import { useDispatch } from 'react-redux';

import { setAddModal } from '../../actions/notesActions';

import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddNoteButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff6e40',
  width: '8rem',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#f4511e',
  },
  [theme.breakpoints.down('xs')]: {
    marginTop: '1rem',
  },
}));

const AddButton = () => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(setAddModal());
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
