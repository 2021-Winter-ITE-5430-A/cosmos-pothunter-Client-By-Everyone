import React, { useState } from 'react';

const JobWhere = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    props.filterLocations(e.target.value);
  };
  return (
    <div className='App'>
        <span>Where</span>
      <input
        type='text'
        placeholder='Toronto,ON'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default JobWhere;