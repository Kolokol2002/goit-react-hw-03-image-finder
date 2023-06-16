import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

function ImageGalleryItem({ item }) {
  const { largeImageURL, webformatURL } = item;
  return (
    <GalleryItem>
      <GalleryImg src={webformatURL} alt="" />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
