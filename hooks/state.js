import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const sharedState = {
    sideBarState: [showSideBar, setShowSideBar],
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
