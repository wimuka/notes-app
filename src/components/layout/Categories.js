import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import {
  filteredCategory,
  clearFilteredCategory,
} from '../../actions/notesActions';
import AddNoteModal from '../notes/AddNoteModal';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', justifyContent: 'center', marginTop: '1rem' },

  addNoteBtn: {
    justifyContent: 'end',
  },

  btnsAlignment: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
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
    backgroundColor: '#42a5f4',
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
    backgroundColor: '#689f38',
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
    backgroundColor: '#ffa000',
    color: '#fff',
  },
}));

const Categories = ({ text }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [btnCategory, setBtnCategory] = useState('');
  const { root, addNoteBtn, btnsAlignment } = classes;

  const onBtnClick = category => {
    dispatch(filteredCategory(category));
    setBtnCategory(category);
  };

  return (
    <div className={root}>
      <Grid item md={6} sm={8} xs={11} className={btnsAlignment}>
        <Grid container alignItems='center'>
          <Grid>
            <AllButton
              onClick={() => {
                dispatch(clearFilteredCategory());
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
              onClick={() => onBtnClick('home')}
              style={
                btnCategory === 'home'
                  ? {
                      backgroundColor: '#42a5f4',
                      color: '#fff',
                    }
                  : null
              }
            >
              HOME
            </HomeButton>
            <WorkButton
              onClick={() => onBtnClick('work')}
              style={
                btnCategory === 'work'
                  ? {
                      backgroundColor: '#ffa000',
                      color: '#fff',
                    }
                  : null
              }
            >
              WORK
            </WorkButton>
            <PersonalButton
              onClick={() => onBtnClick('personal')}
              style={
                btnCategory === 'personal'
                  ? {
                      backgroundColor: '#689f38',
                      color: '#fff',
                    }
                  : null
              }
            >
              PERSONAL
            </PersonalButton>
          </Grid>
        </Grid>
        {/* <Hidden only='xs'> */}
        <Grid className={addNoteBtn}>
          <Grid>
            <AddNoteModal />
          </Grid>
        </Grid>
        {/* </Hidden> */}
      </Grid>
    </div>
  );
};

export default Categories;
