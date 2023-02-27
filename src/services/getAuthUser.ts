import axios from 'axios';
import { IProduct } from 'src/shared/productInterface';
import { ILoginCredentials } from 'src/shared/userInterface';
import { BASE_URL } from './urls';

export const getAuthUser = (loginCredentials: ILoginCredentials) => {
  return new Promise<string>((resolve, reject) => {
    axios
      .post(`${BASE_URL}/auth/login/`, loginCredentials)
      .then((res) => {
        resolve(res.data.token);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
