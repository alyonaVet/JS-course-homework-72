import {configureStore} from '@reduxjs/toolkit';
import {dishesReducer} from '../features/dishes/dishesSlice';
import {cartReducer} from '../features/cart/cartSlice';
import {adminCartsReducer} from '../features/adminCarts/adminCartsSlice';

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducer,
    adminCarts: adminCartsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

