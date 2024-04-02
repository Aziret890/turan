import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
interface IInitialState {
  currentUser: boolean;
}
const initialState: IInitialState = {
  currentUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      const token = Cookies.get("jwt");
      if (!token) return (state.currentUser = false);
      state.currentUser = true;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
