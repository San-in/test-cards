import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.nav`
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  padding: 20px;
`;
export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  padding: 10px;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const StyledFooter = styled.footer`
  background-color: #ebd8ff;
  color: #373737;
  padding: 20px;
  text-align: center;
  font-weight: 600;
`;

export const StyledOutletWrapper = styled.div`
  flex-grow: 1;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
