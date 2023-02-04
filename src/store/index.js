import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "../slice/ui-slice";
import cartSlice from "../slice/cart-slice";


const store= configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer}
})

export default store;
