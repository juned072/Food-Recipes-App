import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const CartProduct = () => {
  return (
    <div className="mt-2 flex justify-evenly gap-2 rounded-lg shadow-lg py-2">
      <img
        src="https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png"
        alt="pizza"
        className="w-20 h-16 rounded-lg"
      />
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">Lorem, ipsum dolor.</h3>
          <MdDeleteOutline className="text-lg cursor-pointer hover:text-red-500" />
        </div>
        <div className="flex justify-between items-center mt-2">
          <p>$480</p>
          <div className="flex items-center justify-between gap-2">
            <FaPlus className="border-2 border-gray-700 rounded-md cursor-pointer hover:border-none p-1 text-xl transition-all ease-linear hover:bg-emerald-400 hover:text-white" />
            <p>2</p>
            <FaMinus className="border-2 border-gray-700 rounded-md cursor-pointer hover:border-none p-1 text-xl transition-all ease-linear hover:bg-emerald-400 hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
