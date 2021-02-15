import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1px 8px',
    // width: '50rem',
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

const SearchBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.divCenter}>
      <Grid item md={6} sm={8} xs={11}>
        <Paper component='form' className={classes.root} elevation={3}>
          <Button>
            <SearchIcon className={classes.searchIconColor} />
          </Button>
          <InputBase placeholder='Search notes...' type='text' />
        </Paper>
      </Grid>
    </div>
  );
};

export default SearchBar;
