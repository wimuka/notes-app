import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import { setEditModal, setCurrentNote } from '../../actions/notesActions';

const EditButton = ({ note }) => {
  const dispatch = useDispatch();

  const onBtnClick = async () => {
    await (dispatch(setCurrentNote(note)), console.log(1));
    await (dispatch(setEditModal()), console.log(2));
  };

  return (
    <IconButton disableRipple color='primary' onClick={() => onBtnClick()}>
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;
