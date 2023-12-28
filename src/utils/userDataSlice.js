import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
}

export const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDatas: (state, action) => {
      state.data.length === 0 ? state.data.push(...action.payload) : null
    },
  },
})

export const { userDatas } = userDataSlice.actions

export default userDataSlice.reducer
