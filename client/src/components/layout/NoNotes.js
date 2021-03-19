import React from 'react';
import noNotesFound from '../../img/noNotesFound.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  noNotesDiv: {
    width: 'auto',
    color: '#757575 ',
  },
  noNotesImg: {
    width: '20rem',
    paddingBottom: '5rem',
  },
}));

const NoNotes = () => {
  const classes = useStyles();
  return (
    <div className={classes.noNotesDiv}>
      <h2>Couldn't find any notes</h2>
      <img className={classes.noNotesImg} src={noNotesFound} alt='Add Notes' />
    </div>
  );
};

export default NoNotes;
