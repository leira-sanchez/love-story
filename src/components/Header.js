import { Burger, Menu } from "./Menu";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Great Vibes";
  text-align: center;
`;

const HeaderBox = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: white;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <HeaderBox>
      <Burger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <a href="/">
        <Title>Love 🥨 Story</Title>
      </a>
      <hr></hr>
    </HeaderBox>
  );
}

export default Header;
