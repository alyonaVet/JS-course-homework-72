import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
  selectAdminCarts, selectDeleteOrderLoading,
  selectFetchAdminCartsLoading
} from '../../features/adminCarts/adminCartsSlice';
import {useEffect} from 'react';
import {deleteOrder, fetchOrders} from '../../features/adminCarts/adminCartsThunk';
import {selectDishes} from '../../features/dishes/dishesSlice';
import {fetchDishes} from '../../features/dishes/dishesThuks';
import Order from './Order';
import Spinner from '../../components/Spinner/Spinner';

const Orders = () => {
  const adminOrders = useAppSelector(selectAdminCarts);
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const orderLoading = useAppSelector(selectFetchAdminCartsLoading);
  const deleteLoading = useAppSelector(selectDeleteOrderLoading);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchDishes());
  }, [dispatch]);


  const deleteHandler = async (orderId: string) => {
    await dispatch(deleteOrder(orderId));
    await dispatch(fetchOrders());
  };

  return (
    <div className="container mt-4">
      <h4>Orders:</h4>
      {orderLoading ? (
        <Spinner/>
      ) : (
        Object.entries(adminOrders).map(([orderId, order]) =>
          (
            <Order
              key={orderId}
              orderId={orderId}
              order={order}
              dishes={dishes}
              onDelete={deleteHandler}
              deleteLoading={deleteLoading}
            />
          ))
      )}

    </div>
  );
};

export default Orders;