import axios from 'axios';
import Notiflix from 'notiflix';
import {showLoader,hideLoader} from './loader';
export default class NewApiService {
  constructor() {}

  async fetchCategoryBooks() {
    showLoader()
    const BASE_URL = 'https://books-backend.p.goit.global/books/category-list';
    try {
      let axisoInstance = axios.create();
      const response = await axisoInstance.get(BASE_URL);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.data;
    } catch (error) {
      Notiflix.Notify.warning(
        `Oops! Something went wrong. You caught the following error: ${error.message}.`
      );
    } finally{
      hideLoader()
    }
  }

  async fetchTopFiveBooks() {
    showLoader()
    const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
    try {
      let axisoInstance = axios.create();
      const response = await axisoInstance.get(BASE_URL);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.data;
    } catch (error) {
      Notiflix.Notify.warning(
        `Oops! Something went wrong. You caught the following error: ${error.message}.`
      );
    }  finally{
      hideLoader()
    }
  }
  async fetchBooksForId(id) {
    const BASE_URL = `https://books-backend.p.goit.global/books/${id}`;
    try {
      const response = await axios.get(BASE_URL);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.data;
    } catch (error) {
      Notiflix.Notify.warning(
        `Oops! Something went wrong. You caught the following error: ${error.message}.`
      );
    }
  }
}
