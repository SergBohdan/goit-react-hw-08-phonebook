import { StyledForm, StyledInput } from 'components/LoginForm/LoginFormStyled';
import { LogOutBtn } from 'components/UserMenu/UserMenuStyled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <label >
        Username
        <StyledInput type="text" name="name" />
      </label>
      <label >
        Email
        <StyledInput type="email" name="email" />
      </label>
      <label >
        Password
        <StyledInput type="password" name="password" />
      </label>
      <LogOutBtn type="submit">
        Sign up
      </LogOutBtn>
    </StyledForm>
  );
};
