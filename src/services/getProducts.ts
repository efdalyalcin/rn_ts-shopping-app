import axios from 'axios';
import { IProduct } from 'src/shared/productInterface';
export const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = () => {
  return new Promise<IProduct>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        // console.log('the data from the server ===> ', res.data);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
