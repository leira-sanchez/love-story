import { useState } from "react";
import styled from "styled-components";

const ivesPhotos = ["ive1.jpg", "ive2.jpg", "ive3.jpg"];
const leirasPhotos = ["leira1.jpeg", "leira2.jpeg", "leira3.jpeg"];

const ProfilePic = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
  max-width: calc(100vw - 20px);
  border-radius: 5px;
  z-index: 1;
  float: none;
  filter: drop-shadow(2px 2px 2px gray);
`;

const BioBox = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  width: calc(100vw - 20px);
  bottom: 0;
  text-align: left;
  margin-left: 10px;
  padding: 10px;
  font-size: 12px;
  font-weight: lighter;

  h2 {
    font-size: 2em;
    display: inline-block;
    margin-right: 5px;
  }
`;

const UL = styled.ul`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  margin-top: 0;
  justify-content: space-evenly;
  top: 0;
  min-width: calc(100vw - 20px);
`;

const ProfileBox = styled.div`
  position: relative;
  left: 0;
  right: 0;
  text-align: center;
  font-family: "Varela Round";

  span {
    padding-bottom: 5px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Amatic SC";
`;

const ProgressItem = styled.li`
  list-style: none;
  border-bottom: ${({ currentImage, id }) =>
    id === currentImage ? "3px solid white" : "3px solid darkgray"};
  margin: 4px;
  display: inline-block;
  z-index: 1;
  min-width: ${({ imgCount }) => `calc(80%/${imgCount})`};
`;

const ButtonsOverlay = styled.div`
  width: 50%;
  position: absolute;
  height: 100%;
  z-index: 2;
`;

const BioIcon = styled.img`
  width: 16px;
  height: 16px;
  display: inline-block;
  padding: 0 5px 5px 0;
`;

const IconTextBox = styled.div`
  display: flex;
  align-items: center;
`;

function Nosotras({ currentImage, setCurrentImage }) {
  const [currentLeiraImage, setCurrentLeiraImage] = useState(0);

  const nextImage = (photos) => {
    let currImg;
    if (photos[0].includes("leira")) currImg = currentLeiraImage;
    else currImg = currentImage;

    return currImg + 1 > photos.length - 1 ? currImg : currImg + 1;
  };

  const previousImage = (photos) => {
    let currImg;
    if (photos[0].includes("leira")) currImg = currentImage;
    else currImg = currentImage;
    return currImg - 1 < 0 ? 0 : currImg - 1;
  };

  const progressBarItemsIve = ivesPhotos.map((img, idx) => (
    <ProgressItem
      currentImage={currentImage}
      id={`ive-${idx}`}
      imgCount={ivesPhotos.length}
      key={img}
    ></ProgressItem>
  ));

  const progressBarItemsLeira = leirasPhotos.map((img, idx) => (
    <ProgressItem
      currentImage={currentLeiraImage}
      id={`leira-${idx}`}
      imgCount={leirasPhotos.length}
      key={img}
    ></ProgressItem>
  ));

  function onClickNext(e) {
    if (e.target.currentSrc.includes("leira")) {
      setCurrentLeiraImage(nextImage(leirasPhotos));
    } else {
      setCurrentImage(nextImage(ivesPhotos));
    }
  }

  function onClickPrevious(e) {
    if (e.target.id.includes("leira")) {
      setCurrentLeiraImage(previousImage(leirasPhotos));
    } else {
      setCurrentImage(previousImage(ivesPhotos));
    }
  }

  return (
    <>
      {/* TODO: algo raro cuando empiezo a pasar las fotos de ive, hace como refresh */}
      <Title>Nosotras</Title>
      <div style={{ marginBottom: "50px" }}>
        <ProfileBox>
          <ButtonsOverlay
            id="ive"
            onClick={(e) => onClickPrevious(e)}
          ></ButtonsOverlay>
          <ProfilePic
            onClick={(e) => onClickNext(e)}
            src={ivesPhotos[currentImage]}
          />
          <UL>{progressBarItemsIve}</UL>
          <BioBox>
            <h2>Ive</h2>
            <span style={{ fontSize: "1.4em" }}>35</span>
            <IconTextBox>
              <BioIcon src="https://img.icons8.com/windows/32/ffffff/suitcase.png" />
              <span>Student & Bartender</span>
            </IconTextBox>
            <IconTextBox>
              <BioIcon src="https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v3.png" />
              <span>Polytechnic University of Puerto Rico</span>
            </IconTextBox>
            <IconTextBox>
              <BioIcon src="https://img.icons8.com/windows/32/ffffff/marker.png" />
              <span>53 miles away</span>
            </IconTextBox>
          </BioBox>
        </ProfileBox>
      </div>
      <div>
        <ProfileBox>
          <ButtonsOverlay
            id="leira"
            onClick={(e) => onClickPrevious(e)}
          ></ButtonsOverlay>
          <ProfilePic
            onClick={(e) => onClickNext(e)}
            src={leirasPhotos[currentLeiraImage]}
          />
          <UL>{progressBarItemsLeira}</UL>
          <BioBox>
            <h2>Leira</h2>
            <span style={{ fontSize: "1.4em" }}>29</span>
            <IconTextBox>
              <BioIcon src="https://img.icons8.com/windows/32/ffffff/suitcase.png" />
              <span>Mechanical & Software Engineer</span>
            </IconTextBox>
            <IconTextBox>
              <BioIcon src="https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v3.png" />
              <span>University of Puerto Rico – Mayagüez</span>
            </IconTextBox>
            <IconTextBox>
              <BioIcon src="https://img.icons8.com/windows/32/ffffff/marker.png" />
              <span>53 miles away</span>
            </IconTextBox>
          </BioBox>
        </ProfileBox>
      </div>
    </>
  );
}

export default Nosotras;
