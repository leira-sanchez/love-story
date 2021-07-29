import styled from "styled-components";

const ModalBox = styled.div`
  position: absolute;
  z-index: 7;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px gray;
  padding: 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
  float: right;
  box-shadow: 1px 1px 1px gray;
`;

function Modal({ answer, setIsModalShown }) {
  // TODO: prettify these modals, add locks
  return (
    <ModalBox>
      <>
        <CloseButton onClick={() => setIsModalShown(false)}>X</CloseButton>
        {answer.includes("Si") ? (
          <>
            <h1>¡Bésame!</h1>
            <p>¡Feliz aniversario #0!</p>
          </>
        ) : (
          <h1>🖕🏼</h1>
        )}
      </>
    </ModalBox>
  );
}

export default Modal;
