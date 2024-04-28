import { configureStore } from "@reduxjs/toolkit";

import activeReducer from "./activeSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    link: activeReducer,
    user: userReducer,
  },
});

export default store;
