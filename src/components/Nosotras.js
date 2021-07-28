import styled from "styled-components";

const ProfilePic = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
  /* max-width: 300px; */
  max-width: calc(100vw - 50px);
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  display: block;
`;

const BioBox = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  /* display: flex;
  flex-direction: column; */
  width: calc(100vw - 50px);
  border: 2px solid red;
  bottom: 0;
`;

const UL = styled.ul`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  margin-top: 30px;
  justify-content: space-evenly;
`;

function Nosotras() {
  return (
    <div
      style={{
        position: "relative",
        border: "2px solid green",
        display: "flex",
        height: "100vh",
        width: "calc(100vw - 50px)",
      }}
    >
      <ProfilePic src="ive1.jpg" />
      <UL>
        <li>hellohe</li>
        <li>hellohe</li>
        <li>hellohe</li>
        <li>hellohe</li>
        <li>hellohe</li>
      </UL>
      <BioBox>
        <h2 style={{ display: "inline-block", marginRight: "5px" }}>Ive</h2>
        <span>35</span>
        <p>Bio</p>
      </BioBox>
    </div>
  );
}

export default Nosotras;
