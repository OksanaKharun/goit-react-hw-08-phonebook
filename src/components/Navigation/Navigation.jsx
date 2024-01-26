import InfoUser from '../InfoUser/InfoUser';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../redux/dataUser/userSelect';
import css from './Navigation.css';


const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';
  return (
    <>
      <Navbar className={css.Form} >
        <Container>
          <Navbar.Brand href="/goit-react-hw-08-phonebook/contacts"
          className='nav-brand'>
            Phonebook
          </Navbar.Brand>
          {!user && (
            <Nav>
              {token && (
                <Nav.Link  to="/contacts" as={Link}>
                  Contacts
                </Nav.Link>
              )}
              <Nav.Link to="/signup" as={Link} className='nav-link'>
                Sign Up
              </Nav.Link>
              <Nav.Link to="/login" as={Link}>
                Login
              </Nav.Link>
            </Nav>
          )}

          <InfoUser  />
        </Container>
      </Navbar>
      <Container >
        {user ? (
          <h1 >Welcome {user.name} to your contacts!</h1>
        ) : (
                      <h1 >Welcome to Phonebook.
                          Please login</h1>
        )}
      </Container>
    </>
  );
};

export default Navigation;