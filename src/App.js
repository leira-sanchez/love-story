import { useState } from "react";
import styled from "styled-components";

import TinderCard from "./components/TinderCard";

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  function imageSelector(target) {
    console.log({ target });
  }

  return (
    <TinderCard
      imageSelector={imageSelector}
      currentImage={currentImage}
      setCurrentImage={setCurrentImage}
    >
      {/* hero */}
      {/* Tinder Cards*/}
    </TinderCard>
  );
}

export default App;
