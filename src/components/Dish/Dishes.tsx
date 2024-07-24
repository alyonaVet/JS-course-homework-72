import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishes, selectFetchDishesLoading} from '../../features/dishes/dishesSlice';
import {useEffect} from 'react';
import {fetchDishes} from '../../features/dishes/dishesThuks';
import Spinner from '../Spinner/Spinner';
import DishItem from './DishItem';

const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const dishesLoading = useAppSelector(selectFetchDishesLoading);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);


  return (
    <>
      {dishesLoading ? (
        <Spinner />
      ) : (
        dishes.map((dish) => (
          <DishItem
            key={dish.id}
            dish={dish}
            onDelete={() => null}
            deleteLoading={false}
          />
        ))
      )}
    </>
  );
};

export default Dishes;