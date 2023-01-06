import create from 'zustand';
import { IProduct } from 'src/shared/productInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';
import { ICartItem } from 'src/shared/cartInterface';

interface ICartState {
  cart: ICartItem[];
  totalPrice: number;
  totalItems: number;
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  insertAmount: (product: IProduct, amount: number) => void;
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

        //if there is no item match
        if (includeIndex !== -1) {
          // this if O(1) since indexed, although it is hard to read
          const increasedProduct = {
            ...get().cart[includeIndex],
            amount: get().cart[includeIndex].amount + 1,
          };
          const newCart = [...get().cart];
          newCart[includeIndex] = increasedProduct;

          set(() => ({
            totalItems: get().totalItems + 1,
            totalPrice: get().totalPrice + product.price,
            cart: newCart,
          }));
        } else {
          // if there is same product in the cart
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

        // if there is no match
        if (includeIndex !== -1) {
          let existingProduct = get().cart[includeIndex];
          if (existingProduct.amount === 1) {
            // it removes the product from cart when decreased to 0
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

            const newCart = [...get().cart];
            newCart[includeIndex] = existingProduct;

            set(() => ({
              totalItems: get().totalItems - 1,
              totalPrice: get().totalPrice - product.price,
              cart: newCart,
            }));
          }
        }
      },

      // this is for directly typing the amount in the input field
      insertAmount: (product, amount) => {
        const productIndex = get().cart.findIndex(
          (item: ICartItem) => item.id === product.id
        );

        const productInCart = get().cart[productIndex];

        const amountChangedProduct = {
          ...get().cart[productIndex],
          amount: amount,
        };

        let newCart = [...get().cart];

        if (amountChangedProduct.amount !== 0) {
          newCart[productIndex] = amountChangedProduct;
        } else {
          newCart = newCart.filter(
            (item) => item.id !== amountChangedProduct.id
          );
        }

        // this is to determine weather items increased or decreased
        let totalItems: number;
        let totalPrice: number;
        if (productInCart.amount > amountChangedProduct.amount) {
          const change = productInCart.amount - amountChangedProduct.amount;
          totalItems = get().totalItems - change;
          totalPrice = get().totalPrice - change * product.price;
        } else {
          const change = amountChangedProduct.amount - productInCart.amount;
          totalItems = get().totalItems + change;
          totalPrice = get().totalPrice + change * product.price;
        }

        set(() => ({
          totalItems,
          totalPrice,
          cart: [...newCart],
        }));
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
