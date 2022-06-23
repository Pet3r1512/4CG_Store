/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../hooks/state";
import hoodies from "./hoodies.json";
import minibags from "./minibags.json";
import pants from "./pants.json";
import tshirts from "./tshirts.json";
import wallets from "./wallets.json";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import SubSearchBar from "../../Components/SubSearchBar";
import Button from "../../Components/Button";

export async function getServerSideProps(context) {
  const product = getProducts(context.query.product);

  return {
    props: {
      product: product,
    },
  };
}

function addToCart({ img, name, price }) {
  CartList.push({ img, name, price });
}

const products = hoodies.concat(wallets, minibags, pants, tshirts);

const getProducts = (param) => {
  const splitProduct = param.split("-");
  const key = splitProduct[splitProduct.length - 1];

  const product = products.find((product) => product.key == key);

  if (product) {
    return product;
  } else return null;
};

export default function Product({ product }) {
  const context = useContext(AppContext);
  const CartList = context.cartArray;
  return (
    <div>
      <SideBar />
      <div className="w-full z-10 top-0 bg-gray-600 pb-5" id="navbar">
        <Header />
        <SubSearchBar />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="my-20 w-full flex flex-col sm:flex-row sm:justify-end">
          <div className="max-w-[350px] sm:max-w-[450px] md:max-w-[500px] mx-auto">
            <img src={product.img} alt="" />
          </div>
          <div className="mx-[30px] sm:mx-auto w-full flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-poppins font-bold text-2xl">
                {product.name}
              </h1>
              <p className="font-semibold text-lg">{product.price}</p>
            </div>
            <Button
              onClick={addToCart(product.img, product.name, product.price)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
