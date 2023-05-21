import styled from '@emotion/styled';
import img from 'png/picture.png';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url(${img});
  background-repeat: no-repeat;
  background-position: 90% 90%;
`;

export const StyledTitle = styled.h2`
  font-size: 72px;
`;
