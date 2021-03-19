import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const DelAlert = ({ text }) => {
  return (
    <div>
      <Snackbar>
        <Alert variant='outlined' severity='error'>
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DelAlert;
