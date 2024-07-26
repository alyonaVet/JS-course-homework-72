import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiOrders} from '../../types';
import {RootState} from '../../app/store';
import axiosApi from '../../axiosApi';


export const fetchOrders = createAsyncThunk<ApiOrders, void, { state: RootState }>(
  'orders/fetch',
  async () => {
    const response = await axiosApi.get<ApiOrders | null>('orders.json');
    return response.data || {};
  });