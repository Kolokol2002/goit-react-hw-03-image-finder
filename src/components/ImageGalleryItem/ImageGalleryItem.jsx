import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

function ImageGalleryItem({ item, toggleModal }) {
  const { largeImageURL, webformatURL } = item;
  return (
    <GalleryItem onClick={toggleModal}>
      <GalleryImg data-large-img={largeImageURL} src={webformatURL} alt="" />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
