import React, { useState } from 'react';

const JobSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    props.filterTasks(e.target.value);
  };
  return (
    <div className='App'>
    <span>Search</span>
      <input
        type='text'
        placeholder='Job,Company,Title etc'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default JobSearch;