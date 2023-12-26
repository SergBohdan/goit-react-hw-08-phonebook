
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';



export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>{user.name}</p>
      <button
       
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}