import React from 'react';
import HobbyForm from './HobbyForm';

const AddHobby = ({ history, hobby, setHobby }) => {
  const handleOnSubmit = (hobby) => {
    setHobby([hobby, ...hobby]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <HobbyForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddHobby;