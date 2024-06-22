import styled from "styled-components";
import Nav from "../Nav/Nav";
import HeroPage from "./HeroPage";
// import MobileFooter from "../Nav/MovileFooter";

function HomePage() {
  return (
    <MainPage>
      <Nav />
      <HeroPage />
      {/* <MobileFooter /> */}
    </MainPage>
  );
}

const MainPage = styled.div`
  height: 740px;
`;

export default HomePage;
