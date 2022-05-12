import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Header from "../Components/Header";

export default function Product() {
  const context = useContext(AppContext);
  const [showSideBar, setShowSideBar] = context.sideBarState;
  return (
    <div>
      <Header />
      This is Product page
    </div>
  );
}
