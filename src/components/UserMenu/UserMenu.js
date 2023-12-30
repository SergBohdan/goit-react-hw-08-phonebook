

import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { LogHeader, LogOutBtn } from './UserMenuStyled';



export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <LogHeader>{user.name}</LogHeader>
      <LogOutBtn
       
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </LogOutBtn>
    </div>
  );
}
