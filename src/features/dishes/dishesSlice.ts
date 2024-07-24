import {Dish} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {createDish} from './dishesThuks';

export interface DishesState {
  items: Dish[];
  createLoading: boolean;
}

const initialState: DishesState = {
  items: [],
  createLoading: false,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createDish.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(createDish.fulfilled, (state) => {
        state.createLoading = false;
      })
      .addCase(createDish.rejected, (state) => {
        state.createLoading = false;
      });
  },
  selectors: {
    selectDishes: (state) => state.items,
    selectCreateDishLoading: (state) => state.createLoading,
  }
});

export const dishesReducer = dishesSlice.reducer;

export const {
  selectDishes,
  selectCreateDishLoading,
} = dishesSlice.selectors;
