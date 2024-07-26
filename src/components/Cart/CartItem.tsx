import React from 'react';
import {CartDish} from '../../types';

interface Props {
  cartDish: CartDish;
  onDelete: VoidFunction;
}

const CartItem: React.FC<Props> = ({cartDish, onDelete}) => {
  const price = cartDish.dish.price * cartDish.amount;

  return (
    <div className="card mb-2 p-2 border-0 border-0">
      <div className="d-flex justify-content-between align-items-center">
        <span className="flex-grow-1">{cartDish.dish.title}</span>
        <div className="d-flex justify-content-between w-50 me-5">
          <span> x {cartDish.amount}</span>
          <div className="text-end text-nowrap">{price} KGS</div>
        </div>
        <button
          className="btn btn-danger"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
