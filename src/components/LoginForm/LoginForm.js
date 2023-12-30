import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LogInBtn, StyledForm, StyledInput } from './LoginFormStyled';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm  onSubmit={handleSubmit} autoComplete="off">
      <label >
        Email
        <StyledInput type="email" name="email" />
      </label>
      <label >
        Password
        <StyledInput type="password" name="password" />
      </label>
      <LogInBtn type="submit">
        Log In
      </LogInBtn>
    </StyledForm>
  );
};
