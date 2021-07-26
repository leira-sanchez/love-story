import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  position: ${({ isMenuOpen }) => (isMenuOpen ? "relative" : "absolute")};
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    border-bottom: 1px solid gray;
    box-shadow: 1px 1px 0 lightgray;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;
const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 6;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ isMenuOpen }) => (isMenuOpen ? "#0D0C1D" : "black")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const Burger = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <StyledBurger
      isMenuOpen={isMenuOpen}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Menu = ({ isMenuOpen }) => {
  return (
    <StyledMenu isMenuOpen={isMenuOpen}>
      <a href="/nosotras">
        <span role="img" aria-label="about us">
          👩‍❤️‍💋‍👩
        </span>
        Nosotras
      </a>
      <a href="/aventuras">
        <span role="img" aria-label="price">
          🗺
        </span>
        Nuestras Aventuras
      </a>
      <a href="/horoscopo">
        <span role="img" aria-label="contact">
          ☾
        </span>
        Horóscopo
      </a>
      <a href="/love-story">
        <span role="img" aria-label="contact">
          ❤️
        </span>
        Love Story
      </a>
    </StyledMenu>
  );
};

export { Burger, Menu };
