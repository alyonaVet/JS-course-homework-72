import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ApiDish, ApiDishes, Dish} from '../../types';
import axiosApi from '../../axiosApi';

export const createDish = createAsyncThunk<void, ApiDish, { state: RootState }>(
  'dishes/create',
  async (apiDish) => {
    await axiosApi.post('/dishes.json', apiDish);
  },
);

export const fetchDishes = createAsyncThunk<Dish[], void, { state: RootState }>(
  'dishes/fetch',
  async () => {
    const {data: dishes} = await axiosApi.get<ApiDishes | null>('/dishes.json');

    if (dishes === null) {
      return [];
    }

    return Object.keys(dishes).map((id) => ({
      id,
      ...dishes[id],
    }));
  });
