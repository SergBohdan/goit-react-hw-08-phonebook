import { StyledLink } from './authNavStyled';


export default function AuthNav() {
  return (
    <div>
      <StyledLink to="register">
        Sign up
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </div>
  );
}