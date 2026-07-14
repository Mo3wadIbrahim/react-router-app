import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counterSlice";

const mainStore = configureStore({
  reducer: { counter: counterReducers },
});

export default mainStore;
