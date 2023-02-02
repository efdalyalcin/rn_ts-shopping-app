import { ICartProduct } from './cartInterface';

export interface ILoginCredentials {
  username: string;
  password: string;
}

export interface IUserCart {
  id: number;
  userId: number;
  date: Date;
  products: ICartProduct[];
}

interface IAdress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: IAdress;
  phone: string;
}
