import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import axiosApi from '../../axiosApi';
import {ApiOrder} from '../../types';

export const addOrder = createAsyncThunk<void, ApiOrder, { state: RootState }>(
  'orders/create', async (apiOrder) => {
    await axiosApi.post('/orders.json', apiOrder);
});

