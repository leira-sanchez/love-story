import styled from "styled-components";

import aventuras from "../aventuras";

const ItemBox = styled.div`
  margin: 20px 0;
`;

const GalleryImage = styled.img`
  object-fit: cover;
  width: 100vw;
  display: block;
`;

const ImageTitle = styled.p`
  font-size: 14px;
  padding: 0;
  margin: 3px;
`;

const ImageSubTitle = styled.p`
  font-size: 12px;
  padding: 0;
  margin: 3px;
`;

const allGalleryItems = aventuras.map((item) => {
  return (
    <ItemBox>
      {/* TODO: Make this styled components */}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <span role="img" aria-label="price" style={{ fontSize: "2.5em" }}>
          🗺
        </span>
        <div>
          <ImageTitle>
            <strong>{item.title}</strong>
          </ImageTitle>
          <ImageSubTitle>{item.subtitle}</ImageSubTitle>
        </div>
      </div>
      <GalleryImage src={item.src} />
    </ItemBox>
  );
});

function InstaGallery() {
  return (
    <>
      {/* TODO: center this. Change font */}
      <h2>Nuestras Aventuras</h2>
      {allGalleryItems}
    </>
  );
}

export default InstaGallery;
