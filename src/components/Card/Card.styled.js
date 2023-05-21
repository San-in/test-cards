import styled from '@emotion/styled';
import img from 'png/picture.png';

export const CardItem = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  width: 454px;
  height: 547px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
  font-family: 'Montserrat';
  text-transform: uppercase;
  transition: filter 0.3s ease;
  &:hover,
  :focus {
    filter: saturate(1.5);
  }
  &::before {
    position: absolute;
    top: 251px;
    content: '';
    height: 8px;
    width: 100%;
    background: #ebd8ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06), inset 0px -2px 4px #ae7be3,
      inset 0px 4px 3px #fbf8ff;
  }
`;
export const CardLogo = styled.img`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 88px;
  height: 26px;
`;
export const CardImageWrap = styled.div`
  position: absolute;
  top: 34px;
  left: 52px;
  width: 357px;
  height: 194px;
  background-image: url(${img});
  background-repeat: no-repeat;
`;
export const UserPhotoWrap = styled.div`
  z-index: 1;
  margin-bottom: 20px;
  padding: 10px;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 5.11111px 5.11111px rgba(0, 0, 0, 0.06),
    inset 0px -2.55556px 5.11111px #ae7be3,
    inset 0px 5.11111px 3.83333px #fbf8ff;
`;

export const UserPhoto = styled.img`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 42px;
  width: 92px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CardText = styled.p`
  font-size: 24px;
  line-height: calc(29 / 24);
  font-weight: 500;
  color: #ebd8ff;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
  &:last-of-type {
    margin-bottom: 32px;
  }
`;
