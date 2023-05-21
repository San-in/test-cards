import { Outlet } from 'react-router-dom';
import {
  Layout,
  NavMenu,
  StyledFooter,
  StyledLink,
  StyledOutletWrapper,
} from 'components/SharedLayout/SharedLayout.styled';
import { Conteiner } from 'pages/Tweets/Tweets.styled';

export const SharedLayout = () => {
  return (
    <Layout>
      <NavMenu>
        <Conteiner>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </Conteiner>
      </NavMenu>
      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>

      <StyledFooter>Sanin Oleksandr</StyledFooter>
    </Layout>
  );
};
