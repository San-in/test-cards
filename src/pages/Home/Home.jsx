import { LinkBtn } from 'pages/NotFounded/NotFound.styled';
import { Button, Conteiner } from 'pages/Tweets/Tweets.styled';
import { HomePage, StyledTitle } from './Home.styled';

export const Home = () => {
  return (
    <Conteiner>
      <HomePage>
        <StyledTitle>Quick start</StyledTitle>
        <Button>
          <LinkBtn to="/tweets">GO</LinkBtn>
        </Button>
      </HomePage>
    </Conteiner>
  );
};
