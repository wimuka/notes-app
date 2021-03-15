import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  filteredCategory,
  clearFilteredCategory,
  filteredCatBool,
  clearSearch,
} from '../../actions/notesActions';

import AddNoteModal from '../notes/AddNoteModal';

import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },

  addNoteBtn: {
    justifyContent: 'end',
  },

  btnsAlignment: {
    justifyContent: 'space-between',

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      display: 'flex',
    },
  },
}));

const AllButton = styled(Button)({
  backgroundColor: '#5c6bc0',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#757575',
  },
});

const HomeButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'none',
  marginLeft: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0.1rem',
  },
  color: '#757575',
  '&:hover': {
    backgroundColor: '#ffbf00',
    color: '#fff',
  },
}));

const PersonalButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'none',
  color: '#757575',
  marginLeft: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0.1rem',
  },
  '&:hover': {
    backgroundColor: '#46ac31',
    color: '#fff',
  },
}));

const WorkButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'none',
  marginLeft: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0.1rem',
  },
  color: '#757575',
  '&:hover': {
    backgroundColor: '#42a5f4',
    color: '#fff',
  },
}));

const Categories = () => {
  const dispatch = useDispatch();
  const searchText = useSelector(state => state.notes.searchText);
  const [btnCategory, setBtnCategory] = useState('');
  const classes = useStyles();
  const { root, addNoteBtn, btnsAlignment } = classes;

  const onBtnClick = category => {
    dispatch(filteredCategory(category));
    setBtnCategory(category);
    if (searchText !== '') {
      dispatch(clearSearch());
    } else return null;
  };

  return (
    <Grid className={root}>
      <Grid item md={6} sm={8} xs={11} className={btnsAlignment}>
        <Grid container alignItems='center'>
          <Grid>
            <AllButton
              onClick={() => {
                dispatch(clearFilteredCategory());
                dispatch(filteredCatBool(false));
                onBtnClick('');
              }}
              style={
                btnCategory === ''
                  ? {
                      backgroundColor: '#5c6bc0',
                      color: '#fff',
                    }
                  : { backgroundColor: 'transparent', color: '#757575' }
              }
            >
              ALL
            </AllButton>
            <HomeButton
              onClick={() => {
                onBtnClick('home');
                dispatch(filteredCatBool(true));
              }}
              style={
                btnCategory === 'home'
                  ? {
                      backgroundColor: '#ffbf00',
                      color: '#fff',
                    }
                  : null
              }
            >
              HOME
            </HomeButton>
            <WorkButton
              onClick={() => {
                onBtnClick('work');
                dispatch(filteredCatBool(true));
              }}
              style={
                btnCategory === 'work'
                  ? {
                      backgroundColor: '#42a5f4',
                      color: '#fff',
                    }
                  : null
              }
            >
              WORK
            </WorkButton>
            <PersonalButton
              onClick={() => {
                onBtnClick('personal');
                dispatch(filteredCatBool(true));
              }}
              style={
                btnCategory === 'personal'
                  ? {
                      backgroundColor: '#46ac31',
                      color: '#fff',
                    }
                  : null
              }
            >
              PERSONAL
            </PersonalButton>
          </Grid>
        </Grid>

        <Grid className={addNoteBtn}>
          <Grid>
            <AddNoteModal />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
