import styled from 'styled-components';

export const GalleryItem = styled.li`
  width: 300px;
  height: 200px;
  box-sizing: border-box;
  border-radius: 5px;
  transition-property: transform;
  transition-duration: 0.3s;
  box-shadow: 1px 11px 37px -3px rgba(0, 0, 0, 0.55);
`;
export const GalleryImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
