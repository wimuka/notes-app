import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { styled } from '@material-ui/core/styles';

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
    backgroundColor: 'none',
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

const AddnoteButton = styled(Button)({
  backgroundColor: '#ff6e40',
  width: '8rem',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#f4511e',
  },
});

const Categories = () => {
  const classes = useStyles();
  const { root, addNoteBtn, btnsAlignment } = classes;

  return (
    <div className={root}>
      <Grid item md={6} sm={8} xs={11} className={btnsAlignment}>
        <Grid container alignItems='center'>
          <Grid>
            <AllButton>ALL</AllButton>
            <HomeButton>HOME</HomeButton>
            <WorkButton>WORK</WorkButton>
            <PersonalButton>PERSONAL</PersonalButton>
          </Grid>
        </Grid>
        <Hidden only='xs'>
          <Grid className={addNoteBtn}>
            <Grid>
              <AddnoteButton
                variant='contained'
                color='primary'
                startIcon={<AddIcon fontSize='small' />}
              >
                ADD NOTE
              </AddnoteButton>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Categories;
