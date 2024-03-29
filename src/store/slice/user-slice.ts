import { IFrom, IUser } from "../slice_type/user-slice.type";
import createSliceWithThunk from "../createSliceWithThunk";
import axios from "axios";
import Cookies from "js-cookie";
interface IInitialState {
  currentUser: null | IUser;
  state: {
    isLoading: boolean;
    isError: boolean;
    error: unknown;
  };
}
const initialState: IInitialState = {
  currentUser: null,
  state: {
    isLoading: false,
    isError: false,
    error: null as unknown,
  },
};

const userSlice = createSliceWithThunk({
  name: "user",
  initialState,
  reducers: ({ asyncThunk }) => ({
    getUser: asyncThunk(
      async (_, { rejectWithValue }) => {
        const jwtToken = Cookies.get("jwt");
        if (!jwtToken) return null;
        try {
          const { data } = await axios.get(
            "https://takmatov.pythonanywhere.com/"
          );
          return data;
        } catch (error) {
          return rejectWithValue(error);
        }
      },
      {
        rejected({ state }, { payload }) {
          state.error = payload;
          state.isLoading = false;
          state.isError = true;
        },
        pending({ state }) {
          state.isLoading = true;
        },
        fulfilled({ state, currentUser }, { payload }) {
          if (payload) {
            currentUser = payload;
            state.isLoading = false;
          }
        },
      }
    ),
  }),
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
