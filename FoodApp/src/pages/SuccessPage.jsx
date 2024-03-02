import React, { useEffect, useState } from "react";
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
        <div className="text-center">
          <h1 className="font-semibold text-2xl mb-2">Order Successful!</h1>
          <p className="text-gray-800">
            Your order has been placed successfully
          </p>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
