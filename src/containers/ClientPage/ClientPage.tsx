import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishes, selectFetchDishesLoading} from '../../features/dishes/dishesSlice';
import {useEffect, useState} from 'react';
import {fetchDishes} from '../../features/dishes/dishesThuks';
import Spinner from '../../components/Spinner/Spinner';
import DishItem from '../../components/Dish/DishItem';
import Modal from '../../components/Modal/Modal';
import Cart from '../../components/Cart/Cart';
import {addDish, selectCartDishes} from '../../features/cart/cartSlice';

const ClientPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dishes = useAppSelector(selectDishes);
  const dispatch = useAppDispatch();
  const dishesLoading = useAppSelector(selectFetchDishesLoading);
  const cartDishes = useAppSelector(selectCartDishes);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const totalAmount = cartDishes.reduce((acc, cartDish) => {
    return acc + cartDish.dish.price * cartDish.amount;
  }, 0);

  return (
    <>
      <div className="container mt-4">
        <div>
          {dishesLoading ? (
            <Spinner/>
          ) : (
            dishes.map((dish) => (
              <DishItem
                key={dish.id}
                dish={dish}
                onAdd={() => dispatch(addDish(dish))}
              />
            ))
          )}

        </div>
        <div className="mt-3 pt-3 d-flex justify-content-between align-items-center border-top">
          <div>Order total: {totalAmount}</div>
          <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Checkout</button>
        </div>
      </div>
      <Modal show={showModal} title="Your order:" onClose={() => setShowModal(false)}>
        <Cart onClose={() => setShowModal(false)}/>
      </Modal>

    </>
  );
};

export default ClientPage;