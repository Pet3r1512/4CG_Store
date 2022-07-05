import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ProductWithQuantity } from "./products/fetchProductDetails";

interface SideBarSlice {
  showSideBar: boolean;
  toggleSideBar: (value: boolean) => void;
}

interface CartSlice {
  cart: ProductWithQuantity[];
  addToCart: (product: any) => void;
  resetCart: () => void;
}

export const useAppStore = create<SideBarSlice & CartSlice>()(
  devtools(
    immer((set) => ({
      // SideBar Slice
      showSideBar: false,
      toggleSideBar: (value) =>
        set((state) => {
          state.showSideBar = value ?? !state.showSideBar;
        }),

      // Cart Slice
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const { cart } = state;
          const itemLookup = cart.find((item) => item.key === product.key);

          if (!itemLookup) {
            cart.push({ ...product, quantity: 1 });
            return;
          }

          itemLookup.quantity += 1;
        }),
      resetCart: () =>
        set((state) => {
          state.cart = [];
        }),
    }))
  )
);
