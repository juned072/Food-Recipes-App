import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {loading ? (
        <PulseLoader color="#36d7b7" />
      ) : (
        <div>
          <Link to={"/"}>
            <p className="absolute top-4 left-4 flex items-center">
              <IoHomeOutline className="mr-1" />
              Home
            </p>
            <div className="w-16 h-1 bg-emerald-600 absolute top-10 left-4 rounded-full"></div>
          </Link>
          <div className="text-center">
            <h1 className="font-semibold text-2xl mb-2">Order Successful!</h1>
            <p className="text-gray-800">
              Your order has been placed successfully
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
