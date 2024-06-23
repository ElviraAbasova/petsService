import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
  filter: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    AddProducts: (state, action) => {
      state.arr = action.payload;
      state.filter = action.payload;
    },

    DeleteProducts: (state, action) => {
      state.arr = state.arr.filter((elem) => elem._id != action.payload);
      state.filter = state.filter.filter((elem) => elem._id != action.payload);
    },
    UpdateProducts: (state, action) => {
      const index = state.arr.findIndex(
        (product) => product._id === action.payload._id
      );
      if (index !== -1) {
        state.arr[index] = action.payload;
      }
      const indexFil = state.filter.findIndex(
        (product) => product._id === action.payload._id
      );
      if (indexFil !== -1) {
        state.filter[indexFil] = action.payload;
      }
    },
    PostProducts: (state, action) => {
      const find = state.arr.find((elem) => elem._id == action.payload._id);
      if (!find) {
        state.arr = [...state.arr, action.payload];
        state.filter = [...state.filter, action.payload];

      }
    },
    FilterPet: (state, action) => {
      if (action.payload === "Other") {
        state.filter = state.arr.filter(
          (elem) =>
            elem.pet.toLowerCase().trim() !== "dog" &&
            elem.pet.toLowerCase().trim() !== "cat" &&
            elem.pet.toLowerCase().trim() !== "fish" &&
            elem.pet.toLowerCase().trim() !== "bird" &&
            elem.pet.toLowerCase().trim() !== "peptile"
        );
      } else {
        state.filter = state.arr.filter(
          (elem) =>
            elem.pet.toLowerCase().trim() ===
            action.payload.toLowerCase().trim()
        );
      }
    },
    FilterDiscount: (state, action) => {
      state.filter = state.arr.filter(
        (elem) => elem.discount >= action.payload
      );
    },
    FilterSeller: (state, action) => {
      state.filter = state.arr.filter((elem) => elem.seller >= action.payload);
    },
    FilterCategory: (state, action) => {
      state.filter = state.arr.filter(
        (elem) =>
          elem.category.toLowerCase().trim() ===
          action.payload.toLowerCase().trim()
      );
    },
    FilterRating: (state, action) => {
      const { min, max } = action.payload;
      state.filter = state.arr.filter(elem => elem.rating >= min && elem.rating < max);
    },
    FilterPrice: (state, action) => {
      const { min, max } = action.payload;
      state.filter = state.arr.filter(elem => {
        const discountedPrice = elem.price - (elem.price * elem.discount / 100);
        return discountedPrice >= min && discountedPrice < max;
      });
    },
    
    FilterTags: (state, action) => {
      const tag = action.payload.toLowerCase().trim();
      state.filter = state.arr.filter(elem => elem.tags.some(t => t.toLowerCase().trim().includes(tag)));
    },
    SearchProduct: (state, action) => {
      const searchTerm = action.payload.toLowerCase().trim();
      state.filter = state.arr.filter(elem => elem.title.toLowerCase().includes(searchTerm));
    },
  },
});

export const {
  AddProducts,
  DeleteProducts,
  UpdateProducts,
  PostProducts,
  FilterPet,
  FilterDiscount,
  FilterSeller,
  FilterCategory,
  FilterRating,
  FilterTags,
  FilterPrice,
  SearchProduct
} = productSlice.actions;

export default productSlice.reducer;
