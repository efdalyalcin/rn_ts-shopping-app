import create from 'zustand';
import zustandFlipper from 'react-native-flipper-zustand';
import { IProduct } from 'src/shared/productInterface';

type IFavoriteProductsState = {
  favorites: IProduct[];
  addToFavorites: (product: IProduct) => void;
  removeFromFavorites: (id: number) => void;
};

const useFavoriteProducts = create<IFavoriteProductsState>(
  // important part is set ==> zustand flipper is for react-native dev tools,
  // it can be wrapped to devtools > persists for react itself

  (set) => ({
    favorites: [],
    // "set" now receives as the third parameter, the name of an action that will be shown in Flipper
    addToFavorites: (product) => {
      set((state) => ({
        favorites: [...state.favorites, product],
      }));
    },
    removeFromFavorites: (id) => {
      set((state) => ({
        favorites: state.favorites.filter((product) => product.id !== id),
      }));
    },
  })
);

export default useFavoriteProducts;
