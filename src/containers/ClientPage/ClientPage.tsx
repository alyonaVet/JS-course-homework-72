import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishes, selectFetchDishesLoading} from '../../features/dishes/dishesSlice';
import {useEffect} from 'react';
import {fetchDishes} from '../../features/dishes/dishesThuks';
import Spinner from '../../components/Spinner/Spinner';
import DishItem from '../../components/Dish/DishItem';

const ClientPage = () => {
  const dishes = useAppSelector(selectDishes);
  const dispatch = useAppDispatch();
  const dishesLoading = useAppSelector(selectFetchDishesLoading);


  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div>
        {dishesLoading ? (
          <Spinner/>
        ) : (
          dishes.map((dish) => (
            <DishItem
              key={dish.id}
              dish={dish}
            />
          ))
        )}
        <div>
          <div>Order total:</div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default ClientPage;