import { configureStore } from "@reduxjs/toolkit"
import sideNavReducer from "./sideNavSlice"
import userDataReducer from "./userDataSlice"
export const store = configureStore({
  reducer: {
    sideNav: sideNavReducer,
    user: userDataReducer,
  },
})
