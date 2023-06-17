import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

function ImageGalleryItem({ item, openModal }) {
  const { largeImageURL, webformatURL } = item;
  return (
    <GalleryItem onClick={openModal}>
      <GalleryImg data-large-img={largeImageURL} src={webformatURL} alt="" />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
