import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { css } from "styled-components";

// TODO: create an index for these
import TinderCard from "./components/TinderCard";
import Nosotras from "./components/Nosotras";
import Header from "./components/Header";
import Horoscopo from "./components/Horoscopo";
import Modal from "./components/Modal";
import InstaGallery from "./components/InstaGallery";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const [answer, setAnswer] = useState("");

  const modalIsShownStyles = `
  background-color: black;
  opacity: 0.35;
  height: 100vh;
  position:relative;
  z-index: -1;
  `;

  const DimmingDiv = styled.div`
    height: 100vh;
    z-index: -1;

    ${({ isModalShown }) =>
      isModalShown
        ? css`
            ${modalIsShownStyles}
          `
        : ""}
  `;

  return (
    <>
      <DimmingDiv isModalShown={isModalShown}>
        <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <Router>
          <Switch>
            <Route path="/nosotras">
              <Nosotras />
            </Route>
            <Route path="/aventuras">
              <InstaGallery />
            </Route>
            <Route path="/horoscopo">
              <Horoscopo />
            </Route>
            <Route path="/love-story">
              <TinderCard
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
                setIsModalShown={setIsModalShown}
                setAnswer={setAnswer}
              />
            </Route>
            <Route path="/">
              <Nosotras />
            </Route>
          </Switch>
        </Router>
      </DimmingDiv>
      {isModalShown && (
        <Modal answer={answer} setIsModalShown={setIsModalShown} />
      )}
    </>
  );
}

export default App;
