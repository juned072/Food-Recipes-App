import React from "react";

const Navbar = ({ searchQuery, handleSearchResult }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-emerald-600">
      <h1 className="font-semibold text-2xl md:ml-5">
        Food <span className="text-white text-xl">Recipe</span>
      </h1>
      <div>
        <input
          value={searchQuery}
          onChange={handleSearchResult}
          type="text"
          placeholder="Search foods..."
          className="md:p-3 p-1 md:w-96 rounded-sm outline-none"
        />
      </div>
    </div>
  );
};

export default Navbar;
