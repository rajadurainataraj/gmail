import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  menu: false,
}

export const sideNavSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menu = !state.menu
    },
  },
})

export const { toggleMenu } = sideNavSlice.actions

export default sideNavSlice.reducer
