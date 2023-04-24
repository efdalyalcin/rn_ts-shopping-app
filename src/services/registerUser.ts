import axios from 'axios';
import { IUser } from 'src/shared/userInterface';
import { BASE_URL } from './urls';

const fakeUser = {
  email: 'John@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'John',
    lastname: 'Doe',
  },
  address: {
    city: 'kilcoole',
    street: '7835 new road',
    number: 3,
    zipcode: '12926-3874',
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
  },
  phone: '1-570-236-7033',
};

export const registerUser = (
  username: string,
  email: string,
  password: string
) => {
  const user = { ...fakeUser, username, email, password };

  return new Promise<IUser>((resolve, reject) => {
    axios
      .post(`${BASE_URL}/users`, {
        body: user,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
