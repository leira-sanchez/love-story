import { Burger, Menu } from "./Menu";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Great Vibes";
  text-align: center;
`;

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div style={{ position: "sticky", top: "0", backgroundColor: "white" }}>
      <Burger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Title>Love 🥨 Story</Title>
      <hr></hr>
    </div>
  );
}

export default Header;
