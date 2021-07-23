import styled from "styled-components";

const images = [
  "first.jpg",
  "second.jpg",
  "third.jpg",
  "fourth.jpg",
  "/besito.jpg",
];

const Card = styled.div`
  border: 2px solid red;
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
`;

const Title = styled.h1`
  font-family: "Great Vibes";
  text-align: center;
`;

const Bio = styled.h2`
  max-width: 95%;
  padding: 14px;
  text-align: center;
  font-family: "Amatic SC";
`;

const ButtonBox = styled.div`
  text-align: center;
`;

const ProgressItem = styled.li`
  list-style: none;
  border-bottom: ${({ currentImage, id }) =>
    id === currentImage ? "3px solid white" : "3px solid darkgray"};
  margin: 5px;
  display: inline-block;
  z-index: 1;
`;

const UL = styled.ul`
  position: absolute;
  z-index: 1;
  font-family: "Gorditas", sans-serif;
  padding: 0.5rem;
  align-self: flex-start;
  margin-top: 30px;
  width: 90%;
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

  const ButtonsOverlay = styled.div`
    width: 50%;
    max-height: 190px;
    position: absolute;
    height: 100%;
    z-index: 2;
  `;
  return (
    <Card>
      <Title>Love 🥨 Story</Title>
      <div style={{ maxWidth: "max-content", maxHeight: "190px" }}>
        <ButtonsOverlay
          onClick={() => setCurrentImage(previousImage)}
        ></ButtonsOverlay>
        <ProfileImage
          src={images[currentImage]}
          onClick={() => setCurrentImage(nextImage)}
        />
      </div>
      <UL>{progressBarItem}</UL>
      {/* <Bio>¿Quieres ser mi novia?</Bio> */}
      <ButtonBox>
        <button>Yes</button>
        <button>Si♥️</button>
      </ButtonBox>
    </Card>
  );
}

export default TinderCard;
