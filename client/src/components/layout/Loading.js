import React, { Fragment } from 'react';
import loading from '../../img/loading.gif';

const Loading = () => {
  return (
    <Fragment>
      <img src={loading} alt='Loading...' style={{ width: '10rem' }} />
    </Fragment>
  );
};

export default Loading;
