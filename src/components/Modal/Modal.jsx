import { Img, ModalView, Overlay } from './Modal.styled';

function Modal({ urlImage, toggleModal }) {
  document.body.style.overflow = 'hidden';
  return (
    <Overlay onClick={toggleModal}>
      <ModalView>
        <Img src={urlImage} alt="" />
      </ModalView>
    </Overlay>
  );
}

export default Modal;
