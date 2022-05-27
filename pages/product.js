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
  const hoodiesList = hoodies.map((item) => {
    return (
      <Card key={item.key} name={item.name} price={item.price} img={item.img} />
    );
  });
  const minibagsList = minibags.map((item) => {
    return (
      <Card key={item.key} name={item.name} price={item.price} img={item.img} />
    );
  });
  return (
    <>
      <SideBar />
      <div>
        <Header />
        <div className="max-w-7xl mx-auto mt-5 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <h1 className="text-3xl font-extrabold">Hoodies</h1>
            {hoodiesList}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <h1 className="text-3xl font-extrabold">Mini Bags</h1>
            {minibagsList}
          </div>
        </div>
      </div>
    </>
  );
}
