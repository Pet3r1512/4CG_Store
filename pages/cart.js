import { useAppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SubSearchBar from "../Components/SubSearchBar";
import { convertPrice } from "../hooks/formatPrice";

export default function Cart() {
  const context = useAppContext();
  const CartList = context.cartArray;

  const CartListItems = CartList.map((item) => {
    return (
      <div key={item.key}>
        <img src={item.img} alt="" />
        <h1>{item.name}</h1>
        <p>{item.price}</p>
      </div>
    );
  });

  const product = {
    key: "h4",
    name: "Dark Grey",
    price: 10000000,
    img: "/images/products/Hoodies/h4.jpg",
    bestseller: false,
    slug: "Dark_Grey-h4",
    quantity: 1,
  };

  return (
    <>
      <SideBar />
      <div className="w-full z-10 top-0 bg-gray-600 pb-5" id="navbar">
        <Header />
        <SubSearchBar />
      </div>
      <div>
        <div className="mt-14 mb-16 font-poppins w-full flex flex-col justify-center items-centers">
          <h1 className="text-4xl font-semibold text-black text-center">
            MY CART
          </h1>
        </div>
        {/* Take cart items */}
        <div className="flex gap-x-3 sm:gap-x-14 justify-center h-full items-center max-w-5xl mx-auto">
          <div>
            <img className="max-w-[120px]" src={product.img} alt="" />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl sm:text-3xl font-bold">{product.name}</p>
            <p className="text-2xl sm:text-3xl font-semibold text-center">
              {product.quantity}
            </p>
          </div>
          <p className="text-2xl font-semibold">
            {(product.price = convertPrice(product.price))}
          </p>
        </div>
        {/* Total */}
        <div className="flex justify-between items-center py-auto mx-8 sm:mx-20 md:mx-36 px-4 rounded-lg text-2xl sm:text-3xl font-semibold border-2 border-gray-500">
          <p>Total</p>
          <p>{convertPrice(product.price)}</p>
        </div>
        {/* Checkout button */}
        <div className="flex w-full justify-center mt-12">
          <button className="text-xl bg-black rounded-lg text-white px-4 py-2 font-bold">
            CHECK OUT
          </button>
        </div>
      </div>
    </>
  );
}
