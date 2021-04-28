import React from 'react';

function JobHeader({ title, itemCount }) {
  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  );
}

export default JobHeader;