import { IProduct } from './productInterface';

export interface ICartItem {
  id: number;
  amount: number;
  product: IProduct;
}
