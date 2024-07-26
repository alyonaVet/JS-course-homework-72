import {delivery} from '../../constants';
import {ApiOrder, Dish} from '../../types';
import React from 'react';

interface OrderProps {
  orderId: string;
  dishes: Dish[];
  order: ApiOrder;
  onDelete: (id: string) => void;
  deleteLoading: false | string;
}

const Order: React.FC<OrderProps> = ({orderId, dishes, order, onDelete, deleteLoading}) => {
  let orderTotal = 0;

  const getDishObj = (dishId: string) => {
    return dishes.find((dish) => dish.id === dishId) || {
      id: 'string',
      title: 'Dish not found',
      price: 0,
      image: 'no image',
    };
  };

  return (

    <div className="border w-75 rounded-3 p-3 row mb-4">
      <div className="col-7 me-4">
        {Object.entries(order).map(
          ([dishId, amount]) => {
            const dishObj = getDishObj(dishId);
            orderTotal += dishObj.price;
            return (
              <div className="row" key={dishId}>
                <div className="col">{amount} x {dishObj.title}</div>
                <div className="col">{dishObj.price} KGS</div>
              </div>
            );
          })}

        <div className="row mt-2 pt-1 border-top">
          <div className="col">Delivery</div>
          <div className="col">{delivery} KGS</div>
        </div>
      </div>

      <div className="col">
        <div className="row mb-3 justify-content-end">
          Order total: {orderTotal + delivery}
        </div>
        <div className="row justify-content-end">
          <button
            className="btn p-0 w-auto btn-link"
            type="submit"
            onClick={() => onDelete(orderId)}
          >
            {deleteLoading && deleteLoading === orderId && (<div>Deleting</div>)}
            Complete order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;


