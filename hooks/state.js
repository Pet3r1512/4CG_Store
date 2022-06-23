import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

function useSidebarState() {
  const [showSideBar, setShowSideBar] = useState(false);
  return [showSideBar, setShowSideBar];
}

function useCartArray() {
  const cartArray = [];
  return cartArray;
}

export function AppWrapper({ children }) {
  const sharedState = {
    sideBarState: useSidebarState(),
    cartArray: useCartArray,
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
