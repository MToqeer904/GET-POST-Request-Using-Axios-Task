import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const empListSlice = createSlice({
  name: "emp_list",
  initialState,
  reducers: {
    setEmpList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setEmpList } = empListSlice.actions;
export default empListSlice.reducer;
