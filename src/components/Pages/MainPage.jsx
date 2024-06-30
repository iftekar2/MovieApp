import styled from "styled-components";
import Nav from "../Nav/Nav";
import HeroPage from "./HeroPage";
import NewMovies from "./NewMovies";
import Popular from "./Popular";
// import MobileFooter from "../Nav/MovileFooter";

function HomePage() {
  return (
    <MainPage>
      <Nav />
      <HeroPage />
      <NewMovies />
      <Popular />
      {/* <MobileFooter /> */}
    </MainPage>
  );
}

const MainPage = styled.div`
  height: 740px;
`;

export default HomePage;
