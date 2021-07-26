import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TinderCard from "./components/TinderCard";
import Nosotras from "./components/Nosotras";
import Header from "./components/Header";
import Horoscopo from "./components/Horoscopo";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function imageSelector(target) {
    console.log({ target });
  }

  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Router>
        <Switch>
          <Route path="/nosotras">
            <Nosotras />
          </Route>
          <Route path="/horoscopo">
            <Horoscopo />
          </Route>
          <Route path="/">
            <TinderCard
              imageSelector={imageSelector}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
