const Recommended = ({ handleCategory, selectedCategory }) => {
  return (
    <div className="md:p-8 px-4">
      <h1 className="font-semibold md:text-xl text-lg mb-4 mt-1">
        Find the best food
      </h1>
      <button
        className={`py-1 px-2 rounded-md md:mr-5 mr-2 ${
          selectedCategory === "All"
            ? "bg-emerald-600 text-white"
            : "bg-gray-300 "
        }`}
        onClick={() => handleCategory("All")}
      >
        All
      </button>
      <button
        className={`py-1 px-2 rounded-md md:mr-5 mr-2 ${
          selectedCategory === "Breakfast"
            ? "bg-emerald-600 text-white"
            : "bg-gray-300 "
        }`}
        onClick={() => handleCategory("Breakfast")}
      >
        Breakfast
      </button>
      <button
        className={`py-1 px-2 rounded-md md:mr-5 mr-2 ${
          selectedCategory === "Lunch"
            ? "bg-emerald-600 text-white"
            : "bg-gray-300 "
        }`}
        onClick={() => handleCategory("Lunch")}
      >
        Lunch
      </button>
      <button
        className={`py-1 px-2 rounded-md md:mr-5 mr-2 ${
          selectedCategory === "Dinner"
            ? "bg-emerald-600 text-white"
            : "bg-gray-300 "
        }`}
        onClick={() => handleCategory("Dinner")}
      >
        Dinner
      </button>
      <button
        className={`py-1 px-2 rounded-md md:mr-5 mr-2 ${
          selectedCategory === "Snacks"
            ? "bg-emerald-600 text-white"
            : "bg-gray-300 "
        }`}
        onClick={() => handleCategory("Snacks")}
      >
        Snacks
      </button>
    </div>
  );
};

export default Recommended;
