import axios from 'axios';

const API_KEY = 'key=37921482-72f90688d71d4f824da394175';
const BASE_URL = 'https://pixabay.com/api/';

export default class ImagesApi {
  constructor() {
    this.value = '';
    this.page = 1;
  }

  async fetchArticles() {
    try {
      const response = await axios.get(
        `${BASE_URL}?${API_KEY}&q=${this.value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
      );
      this.page += 1;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  resetPage() {
    this.page = 1;
  }

  get inputValue() {
    return this.value;
  }

  set inputValue(newValue) {
    this.value = newValue;
  }
}
