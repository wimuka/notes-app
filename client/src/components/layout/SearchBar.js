import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filteredSearch, setSearchValue } from '../../actions/notesActions';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1px 8px',
    height: '3rem',
    display: 'flex',
    marginTop: '5rem',
    backgroundColor: '#ffffff',
  },

  divCenter: {
    display: 'flex',
    justifyContent: 'center',
  },

  searchIconColor: {
    color: '#8d8d8d',
  },
}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.notes.searchText);
  const classes = useStyles();

  const onSearchChange = e => {
    dispatch(filteredSearch(e.target.value));
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div className={classes.divCenter}>
      <Grid item md={6} sm={8} xs={11}>
        <Paper component='form' className={classes.root} elevation={3}>
          <Button disabled aria-label='search icon'>
            <SearchIcon className={classes.searchIconColor} />
          </Button>
          <InputBase
            placeholder='Search notes...'
            type='text'
            value={text}
            aria-label='search notes'
            onChange={e => {
              onSearchChange(e);
            }}
          />
        </Paper>
      </Grid>
    </div>
  );
};

export default SearchBar;
