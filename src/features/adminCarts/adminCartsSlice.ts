import {ApiOrders} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchOrders} from './adminCartsThunk';

export interface AdminCartsState {
  adminCarts: ApiOrders;
  fetchLoading: boolean;
}

const initialState: AdminCartsState = {
  adminCarts: {},
  fetchLoading: false,
}

export const adminCartsSlice = createSlice({
  name: 'adminCarts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.adminCarts = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.fetchLoading = false;
      });
  },
  selectors: {
    selectAdminCarts: (state) => state.adminCarts,
    selectFetchAdminCartsLoading: (state) => state.fetchLoading,
  }
});

export const adminCartsReducer = adminCartsSlice.reducer;

export const {
  selectAdminCarts,
  selectFetchAdminCartsLoading,
} = adminCartsSlice.selectors;
