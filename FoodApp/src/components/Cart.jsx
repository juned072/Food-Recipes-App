import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartProduct from "./CartProduct";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const [openCartpage, setOpenCartPage] = useState(true);
  return (
    <div>
      <div
        className="flex justify-center items-center rounded-full text-white cursor-pointer text-lg md:text-xl shadow-md font-bold absolute md:top-20 top-16 right-5 bg-emerald-800 md:w-10 md:h-10 w-8 h-8"
        onClick={() => setOpenCartPage(false)}
      >
        <FaCartShopping />
      </div>

      <div
        className={`fixed top-0 h-full md:w-[25vw] w-full shadow-xl bg-white p-4 overflow-y-auto  ${
          openCartpage ? "hidden" : "right-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl ">My Order</h1>
          <IoIosCloseCircleOutline
            className="text-xl cursor-pointer rounded-full hover:bg-red-600 hover:text-white"
            onClick={() => setOpenCartPage(true)}
          />
        </div>
        <div className="mt-5">
          <CartProduct />
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-slate-800">Item :</h2>
          <h2 className="font-semibold text-slate-800">Total Amount :</h2>
          <button className="p-2 bg-emerald-500 text-white md:w-[22vw] w-full rounded-md mb-5 mt-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
