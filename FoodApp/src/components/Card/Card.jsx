import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/CardSlice";
import toast, { Toaster } from "react-hot-toast";

const Card = ({ filteredItemCategory }) => {
  const handleToast = (name) => {
    toast.success(`Added ${name} successfully`);
  };
  const dispatch = useDispatch();
  return (
    <>
      <Toaster />
      <div className="md:px-8 p-5 grid md:grid-cols-4 grid-cols-1 gap-10">
        {filteredItemCategory.map((item) => {
          return (
            <div
              key={item.id}
              className="md:w-[290px] w-full rounded-md shadow-md overflow-hidden"
            >
              <img src={item.img} alt="burger" className="w-full h-52" />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg ">{item.name}</h1>
                  <p className="font-semibold text-emerald-800">
                    ${item.price}
                  </p>
                </div>
                <p className="mt-1 mb-1 text-gray-800">
                  {item.desc.slice(0, 50)}...
                </p>
                <div className="flex justify-between items-center mt-1 mb-2">
                  <p>⭐{item.rating}</p>
                  <button
                    className="p-2 px-2 bg-emerald-700 text-white rounded-md"
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: item.id,
                          img: item.img,
                          name: item.name,
                          price: item.price,
                          qty: 1,
                        }),
                        handleToast(item.name)
                      );
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
