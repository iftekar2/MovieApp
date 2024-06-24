import styled from "styled-components";
import Nav from "../Nav/Nav";
import HeroPage from "./HeroPage";
import Popular from "./Popular";
// import MobileFooter from "../Nav/MovileFooter";

function HomePage() {
  return (
    <MainPage>
      <Nav />
      <HeroPage />
      <Popular />
      {/* <MobileFooter /> */}
    </MainPage>
  );
}

const MainPage = styled.div`
  height: 740px;
`;

export default HomePage;
