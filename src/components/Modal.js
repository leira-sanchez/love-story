import styled from "styled-components";

const ModalBox = styled.div`
  position: absolute;
  z-index: 7;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px gray;
  padding: 20px;
`;

function Modal({ answer }) {
  return (
    <ModalBox>
      {answer.includes("Si") ? (
        <>
          <h1>¡Bésame!</h1>
          <p>¡Feliz aniversario #0!</p>
        </>
      ) : (
        <>
          <h1>🖕🏼</h1>
        </>
      )}
    </ModalBox>
  );
}

export default Modal;
