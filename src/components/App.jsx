import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUserThunk } from '../redux/dataUser/userThunk';
import Navigation from './Navigation/Navigation';
import { PublicRoute } from '../components/PublicRoute';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/Login/Login';
import { PrivateRoute } from '../components/PrivateRoute';
import Contacts from '../pages/Contacts';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: '50px',
        fontSize: 20,
        color: '#010101',
      }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;