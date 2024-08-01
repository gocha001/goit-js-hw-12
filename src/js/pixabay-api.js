import axios from 'axios';

export default async function searchImagesByQuery(sear, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '45094022-90f186f65f49c334b8043619f',
      q: sear,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: '15',
      page: page,
    },
  });
  return response.data;
}
