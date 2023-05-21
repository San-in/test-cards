import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Button = styled.button`
  min-width: 226px;
  margin: 0 auto 48px;
  padding: 16px 47px;
  background-color: ${props => (props.isActive ? '#5cd3a8' : '#ebd8ff')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 12px;
  color: #373737;
  font-family: inherit;
  font-size: 20px;
  line-height: calc(24 / 20);
  font-weight: 600;
  cursor: pointer;
  text-transform: inherit;
  display: block;
  &:hover,
  &:focus {
    background-color: ${props => (props.isActive ? '#4ab998' : '#cbb6e2')};

    transform: scale(1.05);
  }
`;

export const Conteiner = styled.div`
  max-width: 1480px;
  padding: 0 20px;
  margin: 0 auto;
  height: 100%;
`;
