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

const GalleryTitle = styled.h2`
  text-align: center;
  font-family: "Amatic SC";
`;

const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GalleryItemIcon = styled.span`
  font-size: 2.5em;
`;

const allGalleryItems = aventuras.map((item) => {
  return (
    <ItemBox>
      <ItemInfoBox>
        <GalleryItemIcon role="img" aria-label="price">
          🗺
        </GalleryItemIcon>
        <div>
          <ImageTitle>
            <strong>{item.title}</strong>
          </ImageTitle>
          <ImageSubTitle>{item.subtitle}</ImageSubTitle>
        </div>
      </ItemInfoBox>
      <GalleryImage src={item.src} />
    </ItemBox>
  );
});

function InstaGallery() {
  return (
    <>
      <GalleryTitle>Nuestras Aventuras</GalleryTitle>
      {allGalleryItems}
    </>
  );
}

export default InstaGallery;
