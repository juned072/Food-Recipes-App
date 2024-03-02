import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartProduct from "./CartProduct";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [openCartpage, setOpenCartPage] = useState(true);
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.cart);

  const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItem.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  return (
    <div>
      <div
        className={`flex justify-center items-center rounded-full text-white cursor-pointer text-lg md:text-xl shadow-md font-bold absolute md:top-20 top-16 right-5 bg-emerald-800 md:w-10 md:h-10 w-8 h-8 ${
          totalQty > 0 && "animate-bounce transition-all delay-500"
        } `}
        onClick={() => setOpenCartPage(false)}
      >
        <FaCartShopping />
      </div>

      <div
        className={`fixed top-0 h-[100vh] md:w-[25vw] w-full shadow-xl bg-white p-4 overflow-y-auto  ${
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
          {cartItem.length === 0 ? (
            <h2 className="text-center font-semibold">Cart is empty</h2>
          ) : (
            cartItem.map((food) => {
              return (
                <CartProduct
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  img={food.img}
                  qty={food.qty}
                />
              );
            })
          )}
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-slate-800">Item : {totalQty} </h2>
          <h2 className="font-semibold text-slate-800">
            Total Amount : {totalPrice}
          </h2>
          <button
            onClick={() => navigate("/successpage")}
            className="p-2 bg-emerald-500 text-white md:w-[22vw] w-full rounded-md mb-5 mt-2"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
