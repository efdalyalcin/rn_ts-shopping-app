import create from 'zustand';
import zustandFlipper from 'react-native-flipper-zustand';

type BearStoreT = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

const useFavoriteProducts = create<BearStoreT>(
  zustandFlipper(
    // important part is set ==> zustand flipper is for react-native dev tools,
    // it can be wrapped to devtools > persists for react itself
    (set) => ({
      bears: 0,
      // "set" now receives as the third parameter, the name of an action that will be shown in Flipper
      increasePopulation: () =>
        set(
          (state) => ({ bears: state.bears + 1 }),
          false,
          'increasePopulation'
        ),
      removeAllBears: () => set({ bears: 0 }, false, 'removeAllBears'),
    }),
    'useFavoriteProducts'
  )
);

export default useFavoriteProducts;
