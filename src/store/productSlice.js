import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchProducts.pending, (state, action) => {
  //         state.status = STATUSES.LOADING;
  //       })
  //       .addCase(fetchProducts.fulfilled, (state, action) => {
  //         state.data = action.payload;
  //         state.status = STATUSES.IDLE;
  //       })
  //       .addCase(fetchProducts.rejected, (state, action) => {
  //         state.status = STATUSES.ERROR;
  //       });
  //   },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//handling async api calls using Thunks
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      dispatch(setProducts(data.products));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// we can also use createAsyncThunk method for above operations which takes two parameters an identifier(kuch bi likh dena) and a async function
// export const fetchProducts = createAsyncThunk("productFetch", async () => {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   return data.products;
// });
