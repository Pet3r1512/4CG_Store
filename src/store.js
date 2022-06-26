import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const ssrPersist = (config, options) => {
  const { getStorage } = options;

  options.getStorage = () => {
    const { setItem, getItem, removeItem } = getStorage();

    return {
      setItem: async (...args) => setItem(...args),
      getItem: async (...args) => getItem(...args),
      removeItem: async (...args) => removeItem(...args),
    }
  };

  return persist(config, options);
};


const middlewares = (store) => devtools(
  ssrPersist(
    immer(store),
    { name: '4cg-store' }
  )
);

const createSideBarSlice = (set) => ({
  showSideBar: false,
  toggleSideBar: (value) => set((state) => {
    state.showSideBar = value ?? !state.showSideBar;
  }),
});

const createCartSlice = (set) => ({
  cart: [],
  addToCart: (product) => set(
    (state) => {
      const { cart } = state;
      const itemLookup = cart.find((item) => item.key === product.key);

      if (!itemLookup) {
        cart.push({ ...product, quantity: 1 });
        return;
      }

      itemLookup.quantity += 1;
    }
  ),
  resetCart: () => set((state) => ({ ...state, cart: [] })),
});

export const useAppStore = create(
  middlewares(
    (...args) => ({
      ...createSideBarSlice(...args),
      ...createCartSlice(...args),
    })
  )
);
