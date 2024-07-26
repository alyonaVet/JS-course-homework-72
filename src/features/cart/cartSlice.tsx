import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartDish, Dish} from '../../types';
import {createOrder} from './cartThunk';

export interface CartState {
  cartDishes: CartDish[];
  createLoading: boolean;
}

const initialState: CartState = {
  cartDishes: [],
  createLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDish: (state, {payload: dish}: PayloadAction<Dish>) => {
      const index = state.cartDishes.findIndex(
        (cartDish) => cartDish.dish.id === dish.id,
      );

      if (index !== -1) {
        state.cartDishes[index].amount++;
      } else {
        state.cartDishes.push({
          amount: 1,
          dish,
        });
      }
    },
    deleteDish: (state, {payload: dishToDelete}: PayloadAction<CartDish>) => {
      state.cartDishes = state.cartDishes.filter(
        cartDish => cartDish.dish.id !== dishToDelete.dish.id
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.createLoading = false;
      })
      .addCase(createOrder.rejected, (state) => {
        state.createLoading = false;
      });
  },

  selectors: {
    selectCartDishes: (state) => state.cartDishes,
  },
});

export const cartReducer = cartSlice.reducer;

export const {addDish, deleteDish} = cartSlice.actions;

export const {selectCartDishes} = cartSlice.selectors;
