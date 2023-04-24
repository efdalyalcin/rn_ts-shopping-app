import { ILoginCredentials } from 'src/shared/userInterface';
import create from 'zustand';
import useCart from './cartStore';
import useFavoriteProducts from './favoriteProductsStore';

type IAuthState = {
  isUserLoggedIn: boolean;
  token: string;
  loginCredentials: ILoginCredentials;
  login: (authToken: string) => void;
  logout: () => void;
  setLoginCredentials: (username: string, password: string) => void;
};

const useAuth = create<IAuthState>((set) => ({
  token: '',
  isUserLoggedIn: false,
  loginCredentials: {
    username: '',
    password: '',
  },
  login: (authToken) => {
    set(() => ({
      token: authToken,
      isUserLoggedIn: true,
    }));
  },
  logout: () => {
    const cart = useCart.getState();
    cart.clearCart();
    const favorites = useFavoriteProducts.getState();
    favorites.clearFavorites();

    set(() => ({
      token: '',
      isUserLoggedIn: false,
    }));
  },
  setLoginCredentials: (username: string, password: string) => {
    set((state) => ({
      ...state,
      loginCredentials: {
        username,
        password,
      },
    }));
  },
}));

export default useAuth;
