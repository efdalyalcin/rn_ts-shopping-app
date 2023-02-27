import axios from 'axios';
import { IUserCart } from 'src/shared/userInterface';
import { BASE_URL } from './urls';

export const getUserCart = (id: number) => {
  return new Promise<IUserCart>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/carts/user/${id}`)
      .then((res) => {
        // console.log('the data from the server ===> ', res.data);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
