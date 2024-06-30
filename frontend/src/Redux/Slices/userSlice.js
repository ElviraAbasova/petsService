import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: [],


}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    AddUsers: (state, action) => {
      state.arr = action.payload;
    },
    DeleteUser: (state, action) => {
      state.arr = state.arr.filter(elem=>elem._id!==action.payload)
    },
    UpdateUser: (state, action) => {
      const index = state.arr.findIndex(product => product._id === action.payload._id);
      if (index !== -1) {
        state.arr[index] = action.payload;
      }
    },
    UpdatePass: (state, action) => {
      const { email, password } = action.payload;
      const user = state.arr.find((user) => user.email === email);
      if (user) {
        user.password = password;
      }
    },
    PostUser: (state, action) => {
      const find = state.arr.find(elem=>elem._id==action.payload._id)
      if(!find){
        state.arr=[...state.arr,action.payload]
      }
    }
  },
})

export const { AddUsers,DeleteUser,UpdateUser,PostUser,UpdatePass } = userSlice.actions

export default userSlice.reducer
