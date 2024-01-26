import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/dataUser/userThunk';
import css from './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
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

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => alert('Incorrect login or password'));
  };

  return (
    <Container>
      <Form className='log-in' onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='lable'>Email</Form.Label>
          <Form.Control
            className='login-input'
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className='login-input'
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button className='login-btn'
          type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;