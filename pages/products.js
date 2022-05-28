import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SubSearchBar from "../Components/SubSearchBar";
import hoodies from "./products/hoodies.json"
import minibags from "./products/minibags.json"
import pants from "./products/pants.json"
import tshirts from "./products/tshirts.json"
import wallets from "./products/wallets.json"
import Card from "../Components/Card";

export default function Products() {
  const context = useContext(AppContext);
  const [showSideBar, setShowSideBar] = context.sideBarState;
  const hoodiesList = hoodies.map((product) => {
    return (
      <Card key={product.key} name={product.name} price={product.price} img={product.img} slug={product.slug} />
    );
  });
  const minibagsList = minibags.map((product) => {
    return (
      <Card key={product.key} name={product.name} price={product.price} img={product.img} slug={product.slug} />
    );
  });
  const pantsList = pants.map((product) => {
    return (
      <Card key={product.key} name={product.name} price={product.price} img={product.img} slug={product.slug} />
    );
  });
  const tshirtsList = tshirts.map((product) => {
    return (
      <Card key={product.key} name={product.name} price={product.price} img={product.img} slug={product.slug} />
    );
  });
  const walletsList = wallets.map((product) => {
    return (
      <div key={product.key}>
        <Card name={product.name} price={product.price} img={product.img} slug={product.slug} />
      </div>
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
