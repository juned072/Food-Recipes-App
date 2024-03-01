import React from "react";

const Card = ({ filteredItemCategory }) => {
  return (
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
                <p className="font-semibold text-emerald-800">${item.price}</p>
              </div>
              <p className="mt-1 mb-1 text-gray-800">
                {item.desc.slice(0, 50)}...
              </p>
              <div className="flex justify-between items-center mt-1 mb-2">
                <p>⭐{item.rating}</p>
                <button className="p-2 px-2 bg-emerald-700 text-white rounded-md">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
