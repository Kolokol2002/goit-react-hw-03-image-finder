import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

function ImageGalleryItem({ item }) {
  const { largeImageURL, webformatURL } = item;
  return (
    <GalleryItem>
      <GalleryImg data-large-img={largeImageURL} src={webformatURL} alt="" />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
