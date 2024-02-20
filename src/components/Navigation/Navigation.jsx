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
        <Container className="container">
          <Navbar.Brand href="/goit-react-hw-08-phonebook/contacts"
          className="logo">
            Phonebook
          </Navbar.Brand>
          {!user && (
             <Nav className='navigation'>
              {token && (
                <Nav.Link  to="/contacts" as={Link} className="text navbuttons">
                  Contacts
                </Nav.Link>
              )}
              <Nav.Link to="/register" as={Link} className="text navbuttons">
                Sign Up
              </Nav.Link>
              <Nav.Link to="/login" as={Link} className="text navbuttons">
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
                      <h1 >Create your own contact list</h1>
        )}
      </Container>
    </>
  );
};

export default Navigation;