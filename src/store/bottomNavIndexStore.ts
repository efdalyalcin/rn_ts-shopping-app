import create from 'zustand';

type IBottomNavIndex = {
  index: number;
  setIndex: (value: number) => void;
};

const useBottomNavIndex = create<IBottomNavIndex>((set) => ({
  index: 0,
  setIndex: (value) => {
    set(() => ({
      index: value,
    }));
  },
}));

export default useBottomNavIndex;
