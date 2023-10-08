import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/cartSlice";

export const store = configureStore({
    reducer : {
        cart : CartSlice
    },
    devTools : true
})