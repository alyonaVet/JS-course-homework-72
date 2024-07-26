import React from 'react';
import {Dish} from '../../types';

interface Props {
  dish: Dish;
  onAdd: VoidFunction;
  children?: React.ReactNode;
}

const DishItem: React.FC<Props> = ({dish, onAdd, children }) => {

  return (
    <div className="card mb-2 px-3 py-2" onClick={onAdd} role="button">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={dish.image} alt={dish.title} className="rounded float-start"
               style={{width: '100px', height: '100px'}}/>
          <span className="card-title ms-4 fs-4">{dish.title}</span>
        </div>
        <div className="card-text fw-semibold me-4">{dish.price} KGS</div>
        {children}
      </div>
    </div>
  );
};

export default DishItem;
