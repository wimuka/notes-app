import React from 'react';
import interact from 'interactjs';

import NotesList from '../notes/NotesList';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  gridHeight: {
    height: '45rem',
    backgroundColor: '#ffff',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    [theme.breakpoints.down('lg')]: {
      height: '45rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '28rem',
    },

    [theme.breakpoints.down('xs')]: {
      height: '19rem',
    },
  },
}));

const dragMoveListener = event => {
  const target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
};

window.dragMoveListener = dragMoveListener;

interact('.draggable').draggable({
  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,
  },
  edges: { top: true, left: true },
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
    }),

    interact.modifiers.snap({
      targets: [interact.snappers.grid({ x: 15, y: 15 })],
      offset: { x: 15, y: 5 },
      range: Infinity,
      relativePoints: [{ x: 0, y: 0 }],
    }),
  ],
});

const NotesDash = () => {
  const classes = useStyles();
  const { root, gridHeight } = classes;
  return (
    <div className={root}>
      <Grid item md={6} sm={8} xs={11}>
        <Grid className={gridHeight}>
          <NotesList />
        </Grid>
      </Grid>
    </div>
  );
};

export default NotesDash;
