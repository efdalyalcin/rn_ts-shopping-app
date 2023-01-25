import { ILoginCredentials } from 'src/shared/userInterface';
import create from 'zustand';
import useCart from './cart';

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
    // it gets whole state, clearCart could be destructured also
    const cart = useCart.getState();
    cart.clearCart();

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
