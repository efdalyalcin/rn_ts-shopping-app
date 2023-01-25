import create from 'zustand';
import zustandFlipper from 'react-native-flipper-zustand';
import { IProduct } from 'src/shared/productInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';

interface IFavoriteProductsState {
  favorites: IProduct[];
  addToFavorites: (product: IProduct) => void;
  removeFromFavorites: (product: IProduct) => void;
}

const useFavoriteProducts = create<IFavoriteProductsState>()(
  // important part is set ==> zustand flipper is for react-native dev tools,
  persist(
    (set, get) => ({
      favorites: [],
      // "set" now receives as the third parameter, the name of an action that will be shown in Flipper
      addToFavorites: (product) => {
        set(() => ({
          favorites: [...get().favorites, product],
        }));
      },
      removeFromFavorites: (product) => {
        set(() => ({
          favorites: get().favorites.filter((fav) => product.id !== fav.id),
        }));
      },
    }),

    {
      name: '@favs',
      getStorage: () => AsyncStorage,
    }
  )
);

export default useFavoriteProducts;
