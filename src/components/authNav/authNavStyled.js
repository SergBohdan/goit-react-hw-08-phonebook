import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: blue;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e6b333;
    text-shadow: -5px -5px 20px rgba(230, 179, 51, 0.5),
      5px 5px 20px rgba(201, 196, 196, 0.5);
  }
  &.active {
    color: #e6b333;
    text-decoration: underline;
  }
`;