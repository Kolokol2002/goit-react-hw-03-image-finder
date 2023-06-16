import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryContainer } from './ImageGallery.styled';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class ImageGallery extends Component {
  state = { modal: false, urlImage: '' };

  toggleModal = ({ target }) => {
    if (this.state.modal) {
      this.setState({ modal: false });
      return;
    }
    const url = target.dataset.largeImg;
    this.setState({ modal: true, urlImage: url });
  };

  render() {
    const { image } = this.props;
    const { modal, urlImage } = this.state;
    const { toggleModal } = this;
    return (
      <>
        <GalleryContainer>
          {image.map(item => (
            <ImageGalleryItem
              key={item.id}
              item={item}
              toggleModal={toggleModal}
            />
          ))}
        </GalleryContainer>
        {modal && <Modal urlImage={urlImage} toggleModal={toggleModal} />}
      </>
    );
  }
}

export default ImageGallery;
