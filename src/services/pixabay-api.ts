// Импортируем модуль axios для работы с HTTP-запросами
import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "39884939-f973fe0cf2cb34cf3e6c18c7b";

// interface FetchData {
//   hits: [];
//   total: number;
//   totalHits: number;
// }

export const getImages = async (query: string, page: number) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  );
  if (response.status === 200) {
    const data = response.data;
    console.log("api:", data);
    return data;
  } else {
    return Promise.reject(new Error(`Нет покемона с именем`));
  }
};
