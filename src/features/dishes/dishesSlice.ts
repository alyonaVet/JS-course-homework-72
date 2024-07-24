import {Dish} from '../../types';
import {createSlice} from '@reduxjs/toolkit';

export interface DishesState {
  items: Dish[];
}

const initialState: DishesState = {
  items: [],
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  selectors: {
    selectDishes: (state) => state.items,
  }
});

export const dishesReducer = dishesSlice.reducer;

export const {
  selectDishes
} = dishesSlice.selectors;
