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
