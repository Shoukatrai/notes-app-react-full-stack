// import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./user/userSlice.js"

// export const store = configureStore({
//   reducer: {
//     user: userReducer
//   },

//   // tp prevent possible errors
//   middleware: (getDefaultMiddleware) => {
//     getDefaultMiddleware({
//       serializableCheck: false,
//     });
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
