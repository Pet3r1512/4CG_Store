import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SubSearchBar from "../Components/SubSearchBar";
import Footer from "../Components/Footer";
import BestSeller from "./products/best.json";
import Card from "../Components/Card";

export default function Best() {
  const context = useContext(AppContext);
  const [showSideBar, setShowSideBar] = context.sideBarState;
  const bestList = BestSeller.map((item) => {
    return (
      <Card
        key={item.key}
        name={item.name}
        price={item.price}
        img={item.img}
        slug={item.slug}
      />
    );
  });
  return (
    <>
      <SideBar />
      <div className="w-full z-10 top-0 bg-gray-600 pb-5" id="navbar">
        <Header />
        <SubSearchBar />
      </div>
      <div className="relative max-w-7xl mx-auto my-14 px-3 sm:px-4 lg:px-0 flex flex-col gap-y-14">
        <div>
          <h1 className="text-3xl font-extrabold">Best Sellers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-5">
            {bestList}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
