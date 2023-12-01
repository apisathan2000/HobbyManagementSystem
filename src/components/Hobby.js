import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Hobby = ({
  id,
  hobbyname,
  user,
  date,
  handleRemoveHobby
}) => {
  return (
    <Card style={{ width: '18rem' }} className="hobby">
      <Card.Body>
        <Card.Title className="hobby-title">{hobbyname}</Card.Title>
        <div className="hobby-details">
          <div>User: {user}</div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveHobby(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Hobby;