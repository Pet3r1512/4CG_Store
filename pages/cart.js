import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SubSearchBar from "../Components/SubSearchBar";

export default function Cart() {
  const context = useContext(AppContext);
  const CartList = context.cartArray;
  const CartListItems = CartList.map((item) => {
    return (
      <div>
        <img src={item.img} alt="" />
        <h1>{item.name}</h1>
        <p>{item.price}</p>
      </div>
    );
  });
  return (
    <>
      <SideBar />
      <div className="w-full z-10 top-0 bg-gray-600 pb-5" id="navbar">
        <Header />
        <SubSearchBar />
      </div>
      <div>
        <h1>My cart</h1>
        {CartListItems}
      </div>
    </>
  );
}
