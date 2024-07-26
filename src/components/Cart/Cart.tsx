import CartDishes from './CartDishes';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {clearCartDishes, selectCartDishes} from '../../features/cart/cartSlice';
import React from 'react';
import {addOrder} from '../../features/cart/cartThunk';

interface Props {
  onClose: VoidFunction;
}

const Cart: React.FC<Props> = ({onClose}) => {
  const cartDishes = useAppSelector(selectCartDishes);
  const dispatch = useAppDispatch();

  const makeOrderObj = () => {

    return cartDishes.reduce(
      (acc, cartDish) => ({...acc, [cartDish.dish.id]: cartDish.amount}), {}
    );

  };

  const createOrder = async () => {
    try {
      await dispatch(addOrder(makeOrderObj()));
      dispatch(clearCartDishes());
      onClose();
    } catch (error) {
      console.error('Could not create dish!');
    }
  };

  let cart = (
    <div className="mt-5 mb-5 text-center">Your cart is empty. Add something!</div>
  );

  if (cartDishes.length > 0) {
    cart = (
      <>
        <CartDishes cartDishes={cartDishes}/>
        <div className="d-flex gap-2 justify-content-end mt-3">
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn btn-primary" onClick={createOrder}>Order</button>
        </div>
      </>
    );
  }

  return (
    <div>
      {cart}
    </div>
  );
};

export default Cart;
