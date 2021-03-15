import React from 'react';
import { useDispatch } from 'react-redux';

import { setEditModal, setCurrentNote } from '../../actions/notesActions';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const EditButton = ({ note }) => {
  const dispatch = useDispatch();

  const onBtnClick = async () => {
    await dispatch(setCurrentNote(note));
    await dispatch(setEditModal());
  };

  return (
    <IconButton disableRipple color='primary' onClick={() => onBtnClick()}>
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;
