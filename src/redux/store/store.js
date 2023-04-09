import { configureStore } from "@reduxjs/toolkit";
import emp_listReducer from "../feature/empListSlice";

export const store = configureStore({
  reducer: {
    emp_list: emp_listReducer,
  },
});
