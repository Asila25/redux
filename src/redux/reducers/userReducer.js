import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "Jone Doe", age: 23, email: "userjfhljhfluie" },
  ],
  reducers: {
    //reducer functions
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      return state.filter((u) => u.id !== action.payload);
    },
    idetUser: (state, action) => {
      return state.map((u) => {
        if (u.id == action.payload.id) u = action.payload;
        return u;
      });
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
