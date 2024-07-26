import React from 'react';
import CartItem from './CartItem';
import { CartDish } from '../../types';
import {useAppDispatch} from '../../app/hooks';
import {deleteDish} from '../../features/cart/cartSlice';
import {delivery} from '../../constants';

interface Props {
  cartDishes: CartDish[];
}


const CartDishes: React.FC<Props> = ({ cartDishes }) => {
  const dispatch = useAppDispatch();

  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + (cartDish.amount * cartDish.dish.price);
  }, 0);


  return (
    <>
      {cartDishes.map((cartDish) => (
        <CartItem key={cartDish.dish.id} cartDish={cartDish} onDelete={() => dispatch(deleteDish(cartDish))} />
      ))}
      <div className="card border-0 p-2">
        <div className="row">
          <div className="col"><strong>Delivery:</strong></div>
          <div className="col-3 text-end text-nowrap">
            {delivery} KGS
          </div>
        </div>
      </div>
      <div className="card border-0 p-2">
        <div className="row">
          <div className="col"><strong>Total:</strong></div>
          <div className="col-3 text-end text-nowrap">
            <strong>{total + delivery}</strong> KGS
          </div>
        </div>
      </div>

    </>
  );
};

export default CartDishes;
