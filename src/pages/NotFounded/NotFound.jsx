import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import {
  LinkBtn,
  NotFoundConteiner,
  NotFoundContent,
  NotFoundTitle,
} from 'pages/NotFounded/NotFound.styled';
import { Button } from 'pages/Tweets/Tweets.styled';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let counter = 3;
    const backToHomeId = setInterval(() => {
      if (counter <= 0) {
        clearInterval(backToHomeId);
        navigate('/', { replace: true });
      }
      counter -= 1;
    }, 1000);
    return () => clearInterval(backToHomeId);
  }, [navigate]);

  return (
    <>
      <NotFoundConteiner>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundContent>
          Oops! The page you are looking for cannot be found.
        </NotFoundContent>
        <Button>
          <LinkBtn to="/">Go Home</LinkBtn>
        </Button>
      </NotFoundConteiner>
    </>
  );
};

export default NotFound;
