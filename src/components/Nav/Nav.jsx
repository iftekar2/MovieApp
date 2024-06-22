import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

function Nav() {
  return (
    <NavPage>
      <NavSection>
        <Logo>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Logo"
          />
        </Logo>
        <NavItems>
          <span className="start">Start</span>
          <span className="shows">TV Shows</span>
          <span className="movies">Movies</span>
          <span className="new">New</span>
          <span className="myList">My List</span>
        </NavItems>
      </NavSection>
      <Icons>
        <IoSearchSharp className="searchIcon" />
        <FaRegBell className="bellIcon" />
      </Icons>
    </NavPage>
  );
}

const NavPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  z-index: 1;
  height: 40px;

  @media only screen and (max-width: 430px) {
    padding: 10px 15px;
    display: block;
  }
`;

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0.04;

  @media only screen and (max-width: 430px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;

const Logo = styled.div`
  img {
    height: 30px;
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .start,
  .shows,
  .movies,
  .new,
  .myList {
    font-size: 18px;
  }

  @media only screen and (max-width: 430px) {
    .start,
    .new {
      display: none;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  .searchIcon {
    font-size: 28px;
    cursor: pointer;
  }

  .bellIcon {
    font-size: 25px;
    cursor: pointer;
  }

  @media only screen and (max-width: 430px) {
    display: none;
  }
`;

export default Nav;
