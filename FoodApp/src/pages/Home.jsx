import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/Navbar";
import Recommended from "../components/recommended/Recommended";
import Card from "../components/Card/Card";
import FoodData from "../database/FoodData";
import Cart from "../components/Cart";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchResult = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    // Filter food items based on the selected category
    const filteredCategory =
      selectedCategory === "All"
        ? FoodData
        : FoodData.filter((food) => food.category === selectedCategory);

    // Filter food items based on the search query
    const filteredSearch = FoodData.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update filteredItems state based on category and search query
    const filteredData = searchQuery ? filteredSearch : filteredCategory;
    setFilteredItems(filteredData);
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        handleSearchResult={handleSearchResult}
      />
      <Recommended
        handleCategory={handleCategory}
        selectedCategory={selectedCategory}
      />
      <Card filteredItemCategory={filteredItems} />
      <Cart />
    </div>
  );
};

export default Home;
