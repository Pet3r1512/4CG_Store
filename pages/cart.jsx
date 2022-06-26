import { useCallback, useState, useEffect } from "react";
import Notice from "../src/layout/Notice";
import Template from "../src/layout/Template";
import { useAppContext } from "../src/hooks/state";
import { convertPrice } from "../src/products/formatPrice";


export default function Cart() {
  const [customerName, setCustomerName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [showUserInputError, setShowUserInputError] = useState(false);
  const [receiptId, setReceiptId] = useState("");
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);
  const [total, setTotal] = useState(0);

  const context = useAppContext();
  const [cart, _setCart, resetCart] = context.cartArray;
  useEffect(() => {
    if (cart.length === 0) {
      setTotal(0);
      return;
    }

    const cartTotal = cart.reduce(
      (subtotal, item) => subtotal + item.price * item.quantity,
      0
    );
    setTotal(cartTotal);
  }, [setTotal, cart]);

  useEffect(() => {
    const hideNoticeTimer = setTimeout(() => {
      setShowUserInputError(false);
      setShowSuccessNotice(false);
    }, 3000);
    return () => clearTimeout(hideNoticeTimer);
  }, [showUserInputError, showSuccessNotice]);

  const onSubmitCheckout = useCallback(() => {
    if (!customerName || !customerPhoneNumber) {
      setShowUserInputError(true);
      return;
    }

    if (cart.length <= 0) {
      alert("There's nothing in your cart");
      return;
    }

    setShowUserInputError(false);
    setShowSuccessNotice(false);
    fetch("/api/pay", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        customerName,
        customerPhoneNumber,
        cart,
        total,
      }),
    })
      .then((result) => result.json())
      .then((result) => {
        setReceiptId(result.receipt.id);
        setShowSuccessNotice(true);
        resetCart();
        setTotal(0);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [customerName, customerPhoneNumber, total, cart, resetCart]);

  return (
    <Template>
      <div className="min-h-screen">
        <div className="mt-14 mb-16 font-poppins w-full flex flex-col justify-center items-centers">
          <h1 className="text-4xl font-semibold text-black text-center">
            MY CART
          </h1>
        </div>
        {showUserInputError && (
          <Notice
            status={"error"}
            content="Please fill in your Name and Phone number!"
          />
        )}
        {showSuccessNotice && (
          <Notice
            status={"success"}
            content="Payment comfirmed successfully!"
          />
        )}
        {receiptId && (
          <div className="mt-14 mb-16 font-poppins w-full flex flex-col justify-center items-centers max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-700 text-center px-2">
              Your receipt id is:{" "}
              <span className="text-black font-bold">{receiptId}</span> .
              <br></br> We will contact you shortly to confirm the purchase.
            </h1>
          </div>
        )}
        <div className="max-w-5xl mx-auto mt-14 mb-16 font-poppins w-full flex flex-col justify-center items-centers">
          <input
            type="text"
            className="text-lg px-4 py-2"
            placeholder="Customer Name"
            onChange={(event) => {
              event.preventDefault();
              setCustomerName(event.target.value);
            }}
            value={customerName}
          />
        </div>
        <div className="max-w-5xl mx-auto mt-14 mb-16 font-poppins w-full flex flex-col justify-center items-centers">
          <input
            type="text"
            className="text-lg px-4 py-2"
            placeholder="Customer Phone Number"
            onChange={(event) => {
              event.preventDefault();
              setCustomerPhoneNumber(event.target.value);
            }}
            value={customerPhoneNumber}
          />
        </div>

        {cart.length > 0 &&
          cart.map((item) => (
            <div
              key={item.key}
              className="flex gap-x-3 sm:gap-x-14 justify-center h-full items-center max-w-5xl mx-auto"
            >
              <div>
                <img className="max-w-[120px]" src={item.img} alt="" />
              </div>
              <div className="flex flex-col gap-y-2 min-w-[250px] text-center">
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

        {cart.length > 0 && (
          <>
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-between items-center py-auto mx-auto sm:mx-20 md:mx-36 px-4 rounded-lg text-2xl sm:text-3xl font-semibold border-2 border-gray-500">
                <p>Total</p>
                <p>{convertPrice(total)}</p>
              </div>
            </div>
            <div className="flex w-full justify-center mt-12">
              <button
                className="text-xl bg-black rounded-lg text-white px-4 py-2 font-bold"
                onClick={onSubmitCheckout}
              >
                CHECK OUT
              </button>
            </div>
          </>
        )}
      </div>
    </Template>
  );
}
