import {ApiOrders} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {deleteOrder, fetchOrders} from './adminCartsThunk';
import {deleteDish} from '../dishes/dishesThuks';

export interface AdminCartsState {
  adminCarts: ApiOrders;
  fetchLoading: boolean;
  deleteLoading: false | string;
}

const initialState: AdminCartsState = {
  adminCarts: {},
  fetchLoading: false,
  deleteLoading: false,
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
    builder
      .addCase(deleteDish.pending, (state, { meta: { arg: orderId } }) => {
        state.deleteLoading = orderId;
      })
      .addCase(deleteOrder.fulfilled, (state) => {
        state.deleteLoading = false;
      })
      .addCase(deleteOrder.rejected, (state) => {
        state.deleteLoading = false;
      });
  },
  selectors: {
    selectAdminCarts: (state) => state.adminCarts,
    selectFetchAdminCartsLoading: (state) => state.fetchLoading,
    selectDeleteOrderLoading: (state) => state.deleteLoading,

  }
});

export const adminCartsReducer = adminCartsSlice.reducer;

export const {
  selectAdminCarts,
  selectFetchAdminCartsLoading,
  selectDeleteOrderLoading,
} = adminCartsSlice.selectors;
