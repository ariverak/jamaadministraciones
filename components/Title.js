import React from 'react';

const Title = ({ children }) => {
  return (
    <div className='section-head style-3 text-center'>
      <h2 className='title'>{children}</h2>
      <div className='dlab-separator style-2 bg-primary'></div>
    </div>
  );
};

export default Title;
