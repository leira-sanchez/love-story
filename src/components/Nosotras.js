import styled from "styled-components/macro";

const ivesPhotos = ["/ive1.jpg", "/ive2.jpg", "/ive3.jpg"];
const leiraPhotos = ["leira1.jpeg", "leira2.jpeg", "leira3.jpeg"];

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

const Name = styled.h2`
  font-size: 2em;
  display: inline-block;
  margin-right: 5px;
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
  const nextImage =
    currentImage + 1 > ivesPhotos.length - 1 ? currentImage : currentImage + 1;

  const previousImage = currentImage - 1 < 0 ? 0 : currentImage - 1;

  const progressBarItems = ivesPhotos.map((img, idx) => (
    <ProgressItem
      currentImage={currentImage}
      id={idx}
      imgCount={ivesPhotos.length}
      key={img}
    ></ProgressItem>
  ));

  return (
    <>
      <Title>Nosotras</Title>
      <div style={{ marginBottom: "50px" }}>
        <ProfileBox>
          <ButtonsOverlay
            onClick={() => setCurrentImage(previousImage)}
          ></ButtonsOverlay>
          <ProfilePic
            onClick={() => setCurrentImage(nextImage)}
            src={ivesPhotos[currentImage]}
          />
          <UL>{progressBarItems}</UL>
          <BioBox>
            <Name>Ive</Name>
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
            onClick={() => setCurrentImage(previousImage)}
          ></ButtonsOverlay>
          <ProfilePic
            onClick={() => setCurrentImage(nextImage)}
            src={leiraPhotos[currentImage]}
          />
          <UL>{progressBarItems}</UL>
          <BioBox>
            <Name>Leira</Name>
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
