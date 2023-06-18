import axios from 'axios';

const API_KEY = '35607218-be1597ef8954b4d0df325c6b7';
const BASE_URL = 'https://pixabay.com/api/';

export const getPhotoApi = (text, page, per_page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: per_page,
  });

  const URL = `${BASE_URL}?${params}`;
  const response = axios.get(URL);
  return response;
};
