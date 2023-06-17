import { Img, ModalView, Overlay } from './Modal.styled';

const Modal = ({ urlImage, closeModal }) => (
  <Overlay data-backdrop={true} onClick={closeModal}>
    <ModalView>
      <Img src={urlImage} alt="" />
    </ModalView>
  </Overlay>
);

export default Modal;
