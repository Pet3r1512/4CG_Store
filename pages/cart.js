import { useAppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import SubSearchBar from "../Components/SubSearchBar";
import { convertPrice } from "../hooks/formatPrice";

export default function Cart() {
  const context = useAppContext();
  const [cart] = context.cartArray;
  const total = cart.reduce(
    (subtotal, item) => subtotal + item.price * item.quantity,
    0
  );

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

        {cart.length > 0 && cart.map((item) => (
          <div key={item.key} className="flex gap-x-3 sm:gap-x-14 justify-center h-full items-center max-w-5xl mx-auto">
            <div>
              <img className="max-w-[120px]" src={item.img} alt="" />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-2xl sm:text-3xl font-bold">{item.name}</p>
              <p className="text-2xl sm:text-3xl font-semibold text-center">
                {item.quantity}
              </p>
            </div>
            <p className="text-2xl font-semibold">
              {convertPrice(item.price)}
            </p>
          </div>
        ))}

        <div className="flex justify-between items-center py-auto mx-8 sm:mx-20 md:mx-36 px-4 rounded-lg text-2xl sm:text-3xl font-semibold border-2 border-gray-500">
          <p>Total</p>
          <p>{convertPrice(total)}</p>
        </div>

        <div className="flex w-full justify-center mt-12">
          <button className="text-xl bg-black rounded-lg text-white px-4 py-2 font-bold">
            CHECK OUT
          </button>
        </div>
      </div>
    </>
  );
}
