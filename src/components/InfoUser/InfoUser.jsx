import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/dataUser/userSelect';
import { logoutThunk } from '../../redux/dataUser/userThunk';
import css from './InfoUser.css';

const InfoUser = () => {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className={css.Form}>
      {user && (
        <div >
          <Button className='logout-btn'
            onClick={handleSubmit}
          >
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
};


export default InfoUser;