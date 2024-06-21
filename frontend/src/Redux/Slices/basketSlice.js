import { createSlice } from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';

const initialState = {
  arr: JSON.parse(localStorage.getItem("basket")) || [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddBasket: (state, action) => {
      let control = state.arr.find((elem) => elem._id == action.payload._id);
      if (!control) {
        state.arr= [...state.arr, { ...action.payload, count: 1 }];
      } else {
        control.count++;
      }
      toast("Item added to Basket!", {
        style:{color:"#f47107",fontSize:"1.5rem",textAlign:"center"}
      });
      localStorage.setItem("basket", JSON.stringify(state.arr));
    },
     DecBasket: (state, action) => {
        let control = state.arr.find((elem) => elem._id == action.payload._id);
        if (control.count>1) {
            control.count--
        } else {
            state.arr = state.arr.filter(elem=>elem._id!=action.payload._id)
        }
        localStorage.setItem("basket", JSON.stringify(state.arr));
      },
      IncBasket: (state, action) => {
        let control = state.arr.find((elem) => elem._id == action.payload._id);
        control.count++
        localStorage.setItem("basket", JSON.stringify(state.arr));
      },
      DeleteBasket: (state, action) => {
        let control = state.arr.find((elem) => elem._id == action.payload._id);
        if(control){
            state.arr=state.arr.filter(elem=>elem._id!=action.payload._id)
        }
        toast("Item remove from Basket!", {
          style:{color:"red",fontSize:"1.5rem",textAlign:"center"}
        });
        localStorage.setItem("basket", JSON.stringify(state.arr));
      },
      AddFromDetail: (state, action) => {
        let control = state.arr.find((elem) => elem._id == action.payload._id);
        if (!control) {
          state.arr= [...state.arr, action.payload];
        } else {
          control.count+=action.payload.count;
        }
        toast(`${action.payload.count} Items added to Basket!`, {
          style:{color:"#f47107",fontSize:"1.5rem",textAlign:"center"}
        });
        localStorage.setItem("basket", JSON.stringify(state.arr));
      },
      DeleteAllBas: (state) => {
        state.arr=[]
        localStorage.setItem("basket", JSON.stringify(state.arr))
        toast("Items Remove from Basket!", {
          style:{color:"red",fontSize:"1.5rem",textAlign:"center"}
        });
      },
  },
});

export const { AddBasket,DecBasket,IncBasket,DeleteBasket,AddFromDetail,DeleteAllBas} = basketSlice.actions;

export default basketSlice.reducer;