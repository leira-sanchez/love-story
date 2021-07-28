import { Burger, Menu } from "./Menu";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-family: "Great Vibes";
  text-align: center;
`;

const HeaderBox = styled.header`
  position: sticky;
  top: 0;
  background-color: white;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    //   TODO: turn this into a styled-component
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
