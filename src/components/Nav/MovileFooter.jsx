import styled from "styled-components";
import { RiHome2Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

function MovileFooter() {
  return (
    <FooterIcons>
      <RiHome2Line className="homeIcon" />
      <IoSearchSharp className="icon" />
    </FooterIcons>
  );
}

const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  position: fixed; /* Fix the position relative to the viewport */
  bottom: 0; /* Align to the bottom of the screen */
  right: 20px;
  color: white;
  background: red;
`;

export default MovileFooter;
