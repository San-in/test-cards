import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NotFoundConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: sans-serif;
`;

export const NotFoundTitle = styled.h1`
  font-size: 8rem;
  margin: 0;
`;
export const NotFoundContent = styled.p`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 2rem;
`;

export const LinkBtn = styled(NavLink)`
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #373737;
  font-weight: 600;
`;
