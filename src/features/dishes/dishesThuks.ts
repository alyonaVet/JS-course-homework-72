import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ApiDish, ApiDishes, Dish, UpdateDishType} from '../../types';
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

export const fetchOneDish = createAsyncThunk<ApiDish, string, { state: RootState }>(
  'dishes/fetchOne',
  async (id) => {
    const { data: dish } = await axiosApi.get<ApiDish | null>(
      `/dishes/${id}.json`,
    );

    if (dish === null) {
      throw new Error('Not found');
    }
    return dish;
  },
);

export const updateDish = createAsyncThunk<void, UpdateDishType, { state: RootState }>(
  'dishes/update',
  async ({ id, dish }) => {
    await axiosApi.put(`/dishes/${id}.json`, dish);
  },
);

export const deleteDish = createAsyncThunk<void, string, { state: RootState }>(
  'dishes/deleteDish',
  async (dishId) => {
    await axiosApi.delete('/dishes/' + dishId + '.json');
  },
);
