import styled from "styled-components";

const PhotoWrapper = styled.div`
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid green;
  box-shadow: 3px 1px 5px gray;
  margin: 10px;
`;

const ProfilePhoto = styled.img`
  width: 100px;
  height: 100px;
`;

const SignTitle = styled.h2`
  font-family: "Encode Sans SC";
  margin-bottom: 0;
  text-align: center;
`;

const SignDescription = styled.p`
  /* text-align: center; */
  /* flex-wrap: wrap; */
  /* margin-left: 25px; */
  width: 100%;
`;

const PersonProfile = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const CompatibilityDescription = styled.p`
  margin: 15px;
`;

function Horoscopo() {
  return (
    <>
      <PersonProfile>
        <PhotoWrapper>
          <ProfilePhoto src="ive1-circle.png" />
        </PhotoWrapper>
        <div style={{ maxWidth: "50%" }}>
          <SignTitle>Tauro</SignTitle>
          <SignDescription>
            Se caracteriza por ser plácido gran parte del tiempo, como impetuoso
            y hasta brutal cuando se enoja, como el animal que lo representa.
            Pertenece al elemento Tierra, con lo cual es práctico, ordenado,
            trabajador, ambicioso, serio y pragmático.
          </SignDescription>
        </div>
      </PersonProfile>
      <PersonProfile>
        <div style={{ maxWidth: "50%" }}>
          <SignTitle>Escorpio</SignTitle>
          <SignDescription>
            Se caracteriza por la pasión y la asertividad. Son decididos,
            tremendamente emocionales y tan nobles como leales. Como signo de
            agua, buscarán siempre en el fondo de las cosas y se interesarán por
            los misterios de la vida y por el lado oculto de las cosas.
          </SignDescription>
        </div>
        <PhotoWrapper>
          <ProfilePhoto src="leira-circle.png" />
        </PhotoWrapper>
      </PersonProfile>
      <section>
        <SignTitle>Compatibilidad Zodiacal</SignTitle>
        <CompatibilityDescription>
          Son dos signos opuestos que sienten una atracción física y psíquica al
          momento. La relación puede ser fecunda y apasionada pero para que
          Tauro pueda sentirse seguro del terreno que pisa y las emociones de
          Escorpio no se desborden, es fundamental que ambos respeten sus
          libertades básicas.
        </CompatibilityDescription>
        <CompatibilityDescription>
          Si desean que lo suyo vaya viento en popa a toda vela, ambos deberán
          cuidar mucho su sentido de la posesión, el amor propio en exceso y,
          sobre todo, los celos. Si alguno de ellos sospecha de la falta de
          lealtad del otro, una sombra se cernirá entre ellos y será muy difícil
          que vuelvan a recuperar la confianza.
        </CompatibilityDescription>
        <CompatibilityDescription>
          <strong>Lo mejor.</strong> Conversaciones interesantes y afán de
          conocerse mejor. Dulces reconciliaciones.
        </CompatibilityDescription>
        <CompatibilityDescription>
          <strong>Lo peor.</strong> Celos posesivos, exigencia. Discusiones
          temperamentales.
        </CompatibilityDescription>
      </section>
    </>
  );
}

export default Horoscopo;
