import React, { useMemo } from 'react';

const MainLoading = () => {
  const loading = (
    <div className='main-loading'>
      <img
        src='/images/jama-logo-white.svg'
        width='250'
        className='move-4 logo-loading'
        alt=''
      />
    </div>
  );

  return loading;
};

export default MainLoading;
