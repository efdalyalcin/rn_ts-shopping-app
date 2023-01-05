import create from 'zustand';
import { IProduct } from 'src/shared/productInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';

interface ICartItem {
  id: number;
  amount: number;
  product: IProduct;
}

interface ICartState {
  cart: ICartItem[];
  totalPrice: number;
  totalItems: number;
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
}

//#region asyncStorage functions
const storeData = async (cart: IProduct[]) => {
  try {
    const jsonValue = JSON.stringify(cart);
    await AsyncStorage.setItem('@cart', jsonValue);
  } catch (e) {
    console.log('could not read the storage!!!');
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@cart');
    const data: IProduct[] = jsonValue !== null ? JSON.parse(jsonValue) : [];
    return data;
  } catch (e) {
    console.log('could not read the storage!!!');
  }
};

// export const useStore = create(
//   persist(
//     (set, get) => ({
//       fishes: 0,
//       addAFish: () => set({ fishes: get().fishes + 1 }),
//     }),
//     {
//       name: 'food-storage', // unique name
//       getStorage: () => AsyncStorage, // Add this here!
//     }
//   )
// );
//#endregion

const useCart = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [],
      totalPrice: 0,
      totalItems: 0,

      addToCart: (product) => {
        const includeIndex = get().cart.findIndex(
          (item: ICartItem) => item.id === product.id
        );
        if (includeIndex !== -1) {
          const increasedProduct = {
            ...get().cart[includeIndex],
            amount: get().cart[includeIndex].amount + 1,
          };
          const newCart = [...get().cart];
          newCart[includeIndex] = increasedProduct;

          set(() => ({
            totalItems: get().totalItems + 1,
            totalPrice: get().totalPrice + product.price,
            cart: [...newCart],
          }));
        } else {
          set(() => ({
            totalItems: get().totalItems + 1,
            totalPrice: get().totalPrice + product.price,
            cart: [...get().cart, { product, id: product.id, amount: 1 }],
          }));
        }
      },

      removeFromCart: (product) => {
        const includeIndex = get().cart.findIndex(
          (item: ICartItem) => item.id === product.id
        );
        if (includeIndex !== -1) {
          let existingProduct = get().cart[includeIndex];
          if (existingProduct.amount === 1) {
            set(() => ({
              totalItems: get().totalItems - 1,
              totalPrice: get().totalPrice - product.price,
              cart: get().cart.filter((item) => product.id !== item.id),
            }));
          } else if (existingProduct.amount >= 1) {
            existingProduct = {
              ...existingProduct,
              amount: existingProduct.amount - 1,
            };
          }
        }
      },

      clearCart: () => {
        set(() => ({ totalItems: 0, totalPrice: 0, cart: [] }));
      },
    }),

    {
      name: '@cart',
      getStorage: () => AsyncStorage,
    }
  )
);

export default useCart;
