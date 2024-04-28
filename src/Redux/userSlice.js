import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  payment: 0,
  paymentMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setpaymentMessage: (state, action) => {
      state.paymentMessage = action.payload;
    },
  },
});

export const { setUserName, setPayment, setpaymentMessage } = userSlice.actions;
export const getUserName = (state) => state.user.userName;
export const getpayment = (state) => state.user.payment;
export const getpaymentMessage = (state) => state.user.paymentMessage;

export default userSlice.reducer;
