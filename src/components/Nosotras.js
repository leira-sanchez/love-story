import styled from "styled-components/macro";

const ivesPhotos = ["/ive1.jpg", "/ive2.jpg", "/ive3.jpg"];

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
  border: 2px solid blue;
  min-width: calc(100vw - 20px);
`;

const ProfileBox = styled.div`
  position: absolute;
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

function Nosotras({ currentImage, setCurrentImage }) {
  console.log({ currentImage });
  console.log({ setCurrentImage });

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
      <ProfileBox>
        <ProfilePic onClick={() => setCurrentImage(nextImage)} src="ive1.jpg" />
        <UL>{progressBarItems}</UL>
        <BioBox>
          <h2
            style={{
              fontSize: "2em",
              display: "inline-block",
              marginRight: "5px",
            }}
          >
            Ive
          </h2>
          <span style={{ fontSize: "1.4em" }}>35</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://img.icons8.com/windows/32/ffffff/suitcase.png"
              style={{
                width: "16px",
                height: "16px",
                color: "white",
                display: "inline-block",
                paddingRight: "5px",
                paddingBottom: "5px",
              }}
            />
            <span>Student & Bartender</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v3.png"
              style={{
                width: "16px",
                height: "16px",
                color: "white",
                display: "inline-block",
                paddingRight: "5px",
                paddingBottom: "5px",
              }}
            />
            <span>Polytechnic University of Puerto Rico</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://img.icons8.com/windows/32/ffffff/marker.png"
              style={{
                width: "16px",
                height: "16px",
                color: "white",
                display: "inline-block",
                paddingRight: "5px",
                paddingBottom: "5px",
              }}
            />
            <span>53 miles away</span>
          </div>
        </BioBox>
      </ProfileBox>
    </>
  );
}

export default Nosotras;
