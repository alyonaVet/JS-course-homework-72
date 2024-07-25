import {ApiDish, Dish} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {createDish, deleteDish, fetchDishes, fetchOneDish, updateDish} from './dishesThuks';

export interface DishesState {
  items: Dish[];
  createLoading: boolean;
  fetchLoading: boolean;
  fetchOneLoading: boolean,
  updateLoading: boolean;
  oneDish: null | ApiDish;
  deleteLoading: false | string;
}

const initialState: DishesState = {
  items: [],
  createLoading: false,
  fetchLoading: false,
  fetchOneLoading: false,
  updateLoading: false,
  oneDish: null,
  deleteLoading: false,
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
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchDishes.rejected, (state) => {
        state.fetchLoading = false;
      });
    builder
      .addCase(fetchOneDish.pending, (state) => {
        state.oneDish = null;
        state.fetchOneLoading = true;
      })
      .addCase(fetchOneDish.fulfilled, (state, { payload: apiDish }) => {
        state.oneDish = apiDish;
        state.fetchOneLoading = false;
      })
      .addCase(fetchOneDish.rejected, (state) => {
        state.fetchOneLoading = false;
      });
    builder
      .addCase(updateDish.pending, (state) => {
        state.updateLoading = true;
      })
      .addCase(updateDish.fulfilled, (state) => {
        state.updateLoading = false;
      })
      .addCase(updateDish.rejected, (state) => {
        state.updateLoading = false;
      });
    builder
      .addCase(deleteDish.pending, (state, { meta: { arg: dishId } }) => {
        state.deleteLoading = dishId;
      })
      .addCase(deleteDish.fulfilled, (state) => {
        state.deleteLoading = false;
      })
      .addCase(deleteDish.rejected, (state) => {
        state.deleteLoading = false;
      });
  },
  selectors: {
    selectDishes: (state) => state.items,
    selectCreateDishLoading: (state) => state.createLoading,
    selectFetchDishesLoading: (state) => state.fetchLoading,
    selectFetchOneDishLoading: (state) => state.fetchOneLoading,
    selectUpdateDishLoading: (state) => state.updateLoading,
    selectOneDish: (state) => state.oneDish,
    selectDeleteDishLoading: (state) => state.deleteLoading,
  }
});

export const dishesReducer = dishesSlice.reducer;

export const {
  selectDishes,
  selectCreateDishLoading,
  selectFetchDishesLoading,
  selectFetchOneDishLoading,
  selectUpdateDishLoading,
  selectOneDish,
  selectDeleteDishLoading,
} = dishesSlice.selectors;
