import styled from "styled-components";

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

function InstaGallery() {
  return (
    <ItemBox>
      <h2>Nuestras Aventuras</h2>
      {/* maybe una foto del pueblo (nombre o mapa or both) */}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <span role="img" aria-label="price" style={{ fontSize: "2em" }}>
          🗺
        </span>
        <div>
          <ImageTitle>
            <strong>Image Title</strong>
          </ImageTitle>
          <ImageSubTitle>Pueblo, Puerto Rico</ImageSubTitle>
        </div>
      </div>
      <GalleryImage src="/ive2.jpg" />
    </ItemBox>
  );
}

export default InstaGallery;
