import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slice/CardSlice";

const Store = configureStore({
  reducer: {
    cart: CardSlice,
  },
});
export default Store;
