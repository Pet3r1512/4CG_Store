import { createContext, useContext, useState, useCallback } from "react";

export const AppContext = createContext({});

function useSidebarState() {
  const [showSideBar, setShowSideBar] = useState(false);
  return [showSideBar, setShowSideBar];
}

function useCartArray() {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = useCallback(
    (product) => {
      const itemLookup = cartArray.find((item) => item.key === product.key);

      if (!itemLookup) {
        // Add 1 new item to cart if it's not in the cart
        setCartArray([...cartArray, { ...product, quantity: 1 }]);
        return;
      }

      // Add item to existing entry in cart
      const newCart = cartArray.map((item) => {
        if (item.key !== product.key) return item;

        item.quantity += 1;
        return item;
      });
      setCartArray(newCart);
    },
    [cartArray, setCartArray]
  );

  function resetCart() {
    return setCartArray([]);
  }
  return [cartArray, addToCart, resetCart];
}

export function AppWrapper({ children }) {
  const sharedState = {
    sideBarState: useSidebarState(),
    cartArray: useCartArray(),
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
