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
      .catch(() => alert('Please fill all fields'));
  };


  return (
    <Container className={css.Form}>
      <Form className="wrap form" onSubmit={handleOnSubmit}>
        <Form.Group  controlId="formBasicEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control
           
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group  controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button className="submit"
          type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;