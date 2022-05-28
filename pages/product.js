import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SubSearchBar from "../Components/SubSearchBar";
import hoodies from "../public/images/products/Hoodies/hoodies";
import minibags from "../public/images/products/Mini_Bags/minibags";
import pants from "../public/images/products/Pants/pants";
import tshirts from "../public/images/products/Tshirts/tshirts";
import wallets from "../public/images/products/Wallets/wallets";
import Card from "../Components/Card";
import ProductsSession from "../Components/ProductsSession";

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
  const pantsList = pants.map((item) => {
    return (
      <Card key={item.key} name={item.name} price={item.price} img={item.img} />
    );
  });
  const tshirtsList = tshirts.map((item) => {
    return (
      <Card key={item.key} name={item.name} price={item.price} img={item.img} />
    );
  });
  const walletsList = wallets.map((item) => {
    return (
      <Card key={item.key} name={item.name} price={item.price} img={item.img} />
    );
  });
  return (
    <>
      <SideBar />
      <div>
        <Header />
        <SubSearchBar />
        <div className="max-w-7xl mx-auto my-14 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
          <div>
            <h1 className="text-3xl font-extrabold">Hoodies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
              {hoodiesList}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">Mini Bags</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
              {minibagsList}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">Pants</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
              {pantsList}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">T-shirts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
              {tshirtsList}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">Wallets</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
              {walletsList}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
