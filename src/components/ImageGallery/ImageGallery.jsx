import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryContainer } from './ImageGallery.styled';
import Modal from 'components/Modal/Modal';
import { Component, createRef } from 'react';

class ImageGallery extends Component {
  state = { modal: false, urlImage: '' };
  ref = createRef();
  componentDidMount = () => {
    const { getRef } = this.props;

    getRef(this.ref);
  };

  componentDidUpdate = () => {
    const { modal } = this.state;
    if (modal) {
      window.addEventListener('keydown', this.closeModal);
      return;
    }
    window.removeEventListener('keydown', this.closeModal);
  };

  openModal = ({ target }) => {
    const url = target.dataset.largeImg;
    this.setState({ modal: true, urlImage: url });
    document.body.style.overflow = 'hidden';
  };

  closeModal = e => {
    const { target } = e;

    if (e.code === 'Escape') {
      this.setState({ modal: false });
      document.body.style.overflow = 'visible';
      return;
    }

    if (!target.dataset.backdrop) {
      return;
    }

    this.setState({ modal: false });
    document.body.style.overflow = 'visible';
  };

  render() {
    const { image } = this.props;
    const { modal, urlImage } = this.state;
    const { openModal, closeModal, ref } = this;

    return (
      <>
        <GalleryContainer ref={ref}>
          {image.map(item => (
            <ImageGalleryItem key={item.id} item={item} openModal={openModal} />
          ))}
        </GalleryContainer>
        {modal && <Modal urlImage={urlImage} closeModal={closeModal} />}
      </>
    );
  }
}

export default ImageGallery;
