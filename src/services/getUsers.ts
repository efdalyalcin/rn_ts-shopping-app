import axios from 'axios';
import { IUser } from 'src/shared/userInterface';
import { BASE_URL } from './urls';

export const getAllUsers = () => {
  return new Promise<IUser[]>((resolve, reject) => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((error) => {
        console.log(error);
      });
  });
};

export const getUserById = (id: number) => {
  return new Promise<IUser>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/users/${id}`)
      .then((res) => {
        // console.log('the data from the server ===> ', res.data);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
