import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const HobbyForm = (props) => {
  const [hobby, setHobby] = useState({
    hobbyname: props.hobby ? props.hobby.hobbyname : '',
    user: props.hobby ? props.hobby.user : '',
    date: props.hobby ? props.hobby.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { hobbyname, user } = hobby;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [hobbyname, user];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        hobbyname,
        user,
        date: new Date()
      };
      props.handleOnSubmit(hobby);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'quantity':
//         if (value === '' || parseInt(value) === +value) {
//           setHobby((prevState) => ({
//             ...prevState,
//             [name]: value
//           }));
//         }
//         break;
//       case 'price':
//         if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
//           setBook((prevState) => ({
//             ...prevState,
//             [name]: value
//           }));
//         }
//         break;
//       default:
//         setBook((prevState) => ({
//           ...prevState,
//           [name]: value
//         }));
//     }
//   };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Hobby Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="hobbyname"
            value={hobbyname}
            placeholder="Enter name of the hobby"
            // onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Hobby - User</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="user"
            value={user}
            placeholder="Enter the user name"
            // onChange={handleInputChange}
          />
        </Form.Group>
        {/* <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          /> */}
        {/* </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group> */}
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default HobbyForm;