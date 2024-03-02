import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementqty,
} from "../redux/slice/CardSlice";
import toast from "react-hot-toast";

const CartProduct = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();
  const handleToast = (name) => {
    toast.success(`Removed ${name} successfully`);
  };
  return (
    <div key={id} className="mt-2 flex gap-2 rounded-lg shadow-lg py-2 ">
      <img src={img} alt="pizza" className="w-20 h-16 rounded-lg" />
      <div>
        <div className="flex items-center justify-between gap-2 ">
          <h3 className="font-semibold">{name}</h3>
          <MdDeleteOutline
            onClick={() => {
              dispatch(removeFromCart({ id, name, img, price, qty })),
                handleToast(name);
            }}
            className="text-xl cursor-pointer hover:text-red-500 absolute right-5"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <p>${price}</p>
          <div className="flex items-center justify-between gap-2 absolute right-5">
            <FaMinus
              className="border-2 border-gray-700 rounded-md cursor-pointer hover:border-none p-1 text-xl transition-all ease-linear hover:bg-emerald-400 hover:text-white"
              onClick={() =>
                qty > 1 ? dispatch(decrementqty({ id })) : (qty = 1)
              }
            />
            <p>{qty}</p>
            <FaPlus
              className="border-2 border-gray-700 rounded-md cursor-pointer hover:border-none p-1 text-xl transition-all ease-linear hover:bg-emerald-400 hover:text-white"
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
