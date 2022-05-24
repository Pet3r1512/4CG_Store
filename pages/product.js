import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import hoodies from "../public/images/products/Hoodies/hoodies";
import minibags from "../public/images/products/Mini_Bags/minibags";
import pants from "../public/images/products/Pants/pants";
import tshirts from "../public/images/products/Tshirts/tshirts";
import wallets from "../public/images/products/Wallets/wallets";
import Card from "../Components/Card";

export default function Product() {
  const context = useContext(AppContext);
  const [showSideBar, setShowSideBar] = context.sideBarState;
  return (
    <>
      <SideBar />
      <div>
        <Header />
        This is Product page
      </div>
    </>
  );
}
