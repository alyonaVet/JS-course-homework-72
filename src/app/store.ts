import {configureStore} from '@reduxjs/toolkit';
import {dishesReducer} from '../features/dishes/dishesSlice';
import {cartReducer} from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

