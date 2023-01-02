import create from 'zustand';
import zustandFlipper from 'react-native-flipper-zustand';
import { IProduct } from 'src/shared/productInterface';

type IFavoriteProductsState = {
  favorites: IProduct[];
  addToFavorites: (product: IProduct) => void;
  removeFromFavorites: (product: IProduct) => void;
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
    removeFromFavorites: (product) => {
      set((state) => ({
        favorites: state.favorites.filter((fav) => product.id !== fav.id),
      }));
    },
  })
);

export default useFavoriteProducts;
