import axios from 'axios';
export const BASE_URL = 'https://fakestoreapi.com';

export interface IProductRate {
  count: number;
  rate: number;
}
export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IProductRate;
  title: string;
}

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
