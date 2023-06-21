import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./Slice/loader.js";
import productSlice from "./Slice/product";
import cartSlice from "./Slice/cart";
import videosSlice from "./Slice/videosSlice.js";

export default configureStore({
  reducer: {
    loader: loaderSlice,
    products: productSlice,
    cart: cartSlice,
    videos: videosSlice,
  },
});
