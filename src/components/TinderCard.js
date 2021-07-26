import styled from "styled-components";

const images = [
  "first.jpg",
  "second.jpg",
  "third.jpg",
  "fourth.jpg",
  "/besito.jpg",
];

const messages = [
  "Desde nuestra primera vez juntas...",
  "...supe que quería las aventuras de la vida...",
  "...y compartirme completa contigo.",
  "Me da felicidad pensar en una vida contigo.",
  "¿Quieres ser mi novia?",
];

const Card = styled.div`
  border-radius: 5px;

  display: grid;
  grid-template: "container";
  place-items: center;
  place-content: center;
  overflow: hidden;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 95%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  z-index: 0;
  margin-left: 9px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px gray, 2px 2px 1px gray, 3px 3px 1px lightgray;
`;

const Bio = styled.h2`
  max-width: 95%;
  padding: 14px;
  text-align: center;
  font-family: "Amatic SC";
`;

const ButtonBox = styled.div`
  text-align: center;
  visibility: ${({ isShown }) => (isShown ? "" : "hidden")};

  && button {
    font-family: "Great Vibes";
    font-weight: bold;
    font-size: 1.2em;
    background-color: #c3b3ea;
    margin: 5px;
    border: 1px solid #c3b3ea;
    border-radius: 5px;
    box-shadow: 1px 1px 1px gray;
  }
`;

const ProgressItem = styled.li`
  list-style: none;
  border-bottom: ${({ currentImage, id }) =>
    id === currentImage ? "3px solid white" : "3px solid darkgray"};
  margin: 0 5px;
  display: inline-block;
  z-index: 1;
  width: ${({ imgCount }) => "calc(100%/imgCount)"};
`;

const UL = styled.ul`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  margin-top: 30px;
  justify-content: space-evenly;
`;

const ButtonsOverlay = styled.div`
  width: 50%;
  max-height: 190px;
  position: absolute;
  height: 100%;
  z-index: 2;
`;

const CardStack = styled.div`
  padding: 0;
  max-width: max-content;
  max-height: min-content;
`;

const CardStack2 = styled.div`
  padding: 0;
  max-width: max-content;
  max-height: min-content;
  position: absolute;
  z-index: -1;
  border-radius: 1px;
  opacity: 0.5;
  transform: translate(3px, -46px);
`;

function TinderCard({ currentImage, setCurrentImage }) {
  const nextImage =
    currentImage + 1 > images.length - 1 ? currentImage : currentImage + 1;

  const previousImage = currentImage - 1 < 0 ? 0 : currentImage - 1;

  const progressBarItem = images.map((img, idx) => (
    <ProgressItem id={idx} imgCount={images.length} currentImage={currentImage}>
      <p style={{ opacity: "0" }}>hellohe</p>
    </ProgressItem>
  ));

  const cardStackImages = images
    .filter((img, idx) => idx > currentImage)
    .map((img, idx) => {
      return (
        <CardStack2 idx={idx}>
          <ProfileImage src={images[currentImage + 1]} />
        </CardStack2>
      );
    });

  return (
    <>
      <Card>
        <CardStack>
          <ButtonsOverlay
            onClick={() => setCurrentImage(previousImage)}
          ></ButtonsOverlay>
          <ProfileImage
            draggable={true}
            src={images[currentImage]}
            onClick={() => setCurrentImage(nextImage)}
          />
        </CardStack>
        {cardStackImages}
        <UL>{progressBarItem}</UL>
        <Bio>{messages[currentImage]}</Bio>
      </Card>
      <ButtonBox isShown={currentImage === images.length - 1}>
        <button>❌ No</button>
        <button>✅ Si</button>
      </ButtonBox>
    </>
  );
}

export default TinderCard;
