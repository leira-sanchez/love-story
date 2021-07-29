import styled from "styled-components/macro";

const ProfilePic = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
  max-width: calc(100vw - 20px);
  border-radius: 5px;
  /* position: relative; */
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
  margin-top: 30px;
  justify-content: space-evenly;
  top: 0;
  border: 2px solid blue;
  width: calc(100vw - 20px);
`;

const ProfileBox = styled.div`
  /* border: 2px solid green; */
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-family: "Varela Round";

  span {
    padding-bottom: 5px;
  }
`;

function Nosotras() {
  return (
    <>
      <ProfileBox>
        <ProfilePic src="ive2.jpg" />
        <UL>
          <li>hellohe</li>
          <li>hellohe</li>
          <li>hellohe</li>
          <li>hellohe</li>
          <li>hellohe</li>
        </UL>
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
