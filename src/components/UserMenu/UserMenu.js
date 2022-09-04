import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'redux/authApi';

const UserMenu = () => {
  const { token, email } = useSelector(state => state.user);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    logout(token);
    navigate('/');
  };
  return (
    <div>
      <p>User: {email}</p>
      <button type="button" onClick={onLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
