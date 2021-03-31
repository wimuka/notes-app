import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNotes } from '../../actions/notesActions';

import Loading from './Loading';
import addNote from '../../img/addNote.svg';
import NoNotes from '../layout/NoNotes';
import EditNoteModal from '../notes/EditNoteModal';
import SortableNotes from '../notes/SortableNotes';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    marginTop: '2rem',
    display: 'flex',
  },
  gridHeight: {
    minHeight: '25rem',
    height: '50%',
    borderRadius: '0.3rem',
    backgroundColor: '#ffff',

    [theme.breakpoints.up('xs')]: {
      paddingLeft: '0.6rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '1.4rem',
    },
  },
  noNotesDiv: {
    width: 'auto',
    color: '#424242',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  noNotesImg: {
    width: '20rem',
    paddingBottom: '5rem',
  },
}));

const NotesDash = ({ note }) => {
  const allNotes = useSelector(state => state.notes.allnotes);
  const filteredCategory = useSelector(state => state.notes.filteredCategory);
  const filteredSearch = useSelector(state => state.notes.filteredSearch);
  const searchText = useSelector(state => state.notes.searchText);
  const filteredCatBool = useSelector(state => state.notes.filteredCatBool);
  const loading = useSelector(state => state.notes.loading);

  const classes = useStyles();
  const { root, gridHeight } = classes;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Grid container className={root}>
        <Grid item md={6} sm={8} xs={11} className={gridHeight}>
          {filteredSearch.length === 0 && searchText.length > 0 ? (
            <NoNotes />
          ) : filteredCategory.length === 0 && filteredCatBool ? (
            <NoNotes />
          ) : filteredSearch.length > 0 ? (
            <SortableNotes
              filteredCategory={filteredCategory}
              allNotes={allNotes}
            />
          ) : allNotes.length === 0 ? (
            <div className={classes.noNotesDiv}>
              <h2>You don't have any notes</h2>
              <img
                className={classes.noNotesImg}
                src={addNote}
                alt='Add Notes'
              />
            </div>
          ) : allNotes.length > 0 || filteredCategory.length > 0 ? (
            <SortableNotes
              filteredCategory={filteredCategory}
              allNotes={allNotes}
            />
          ) : null}
          <EditNoteModal note={note} />
        </Grid>
      </Grid>
    );
  }
};

export default NotesDash;
