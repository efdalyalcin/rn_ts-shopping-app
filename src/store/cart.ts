import create from 'zustand';
import { IProduct } from 'src/shared/productInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';

interface ICartState {
  cart: IProduct[];
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
//#endregion

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

const useCart = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        set(() => ({
          cart: [...get().cart, product],
        }));
      },
      removeFromCart: (product) => {
        set(() => ({
          cart: get().cart.filter((fav) => product.id !== fav.id),
        }));
      },
      clearCart: () => {
        set(() => ({ cart: [] }));
      },
    }),
    {
      name: '@cart',
      getStorage: () => AsyncStorage,
    }
  )
);

export default useCart;
