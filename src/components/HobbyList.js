import React from 'react';
import _ from 'lodash';
import Hobby from './Hobby';

const HobbyList = ({ hobby, setHobby }) => {

  const handleRemoveHobby = (id) => {
    setHobby(hobby.filter((hobby) => hobby.id !== id));
  };

  return (
    <React.Fragment>
      <div className="hobby-list">
        {!_.isEmpty(hobby) ? (
          hobby.map((hobby) => (
            <Hobby key={hobby.id} {...hobby} handleRemoveBook={handleRemoveHobby} />
          ))
        ) : (
          <p className="message">No Hobbies Available. Please add some hobbies.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default HobbyList;