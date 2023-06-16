import ImageGalleryItem from 'components/ImageGalleryItem';
import { GalleryContainer } from './ImageGallery.styled';
import Modal from 'components/Modal/Modal';

function ImageGallery({ image }) {
  return (
    <GalleryContainer>
      {image.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
      {false && <Modal />}
    </GalleryContainer>
  );
}

export default ImageGallery;
