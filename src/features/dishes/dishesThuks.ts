import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ApiDish} from '../../types';
import axiosApi from '../../axiosApi';

export const createDish = createAsyncThunk<void, ApiDish, {state: RootState}>(
  'dishes/create',
  async (apiDish) => {
    await axiosApi.post('/dishes.json', apiDish);
  },
);