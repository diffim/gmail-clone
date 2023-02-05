import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";
import darkModeReducer from "../features/darkModeSlice";

export const store = configureStore({
  // the store name has to be equal to the "name" value in the associated slice object
  reducer: {
    mail: mailReducer,
    user: userReducer,
    darkMode: darkModeReducer,
  },
});
