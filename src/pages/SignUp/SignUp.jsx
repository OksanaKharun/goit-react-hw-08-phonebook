import { Button, Container, Form } from 'react-bootstrap';
import { signUpThunk } from '../../redux/dataUser/userThunk';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import css from './SignUp.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };
  const handleOnSubmit = evt => {
    evt.preventDefault();
    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => alert('Please enter all inputs'));
  };
  return (
    <Container className={css.Form}>
      <Form  className="wrap form" onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            className='signup-input'
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            placeholder="Enter your  name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='label1'>Email</Form.Label>
          <Form.Control
             className='signup-input'
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className='label2'>Password</Form.Label>
          <Form.Control
            className='signup-input'
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button className="submit" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;