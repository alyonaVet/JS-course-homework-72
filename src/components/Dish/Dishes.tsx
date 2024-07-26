import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDeleteDishLoading, selectDishes, selectFetchDishesLoading} from '../../features/dishes/dishesSlice';
import {useEffect} from 'react';
import {deleteDish, fetchDishes} from '../../features/dishes/dishesThuks';
import Spinner from '../Spinner/Spinner';
import DishItem from './DishItem';
import Buttons from '../Buttons/Buttons';


const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const dishesLoading = useAppSelector(selectFetchDishesLoading);
  const deleteLoading = useAppSelector(selectDeleteDishLoading);


  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);


  const onDeleteDish = async (id: string) => {
    await dispatch(deleteDish(id));
    await dispatch(fetchDishes());
  };

  return (
    <>
      {dishesLoading ? (
        <Spinner />
      ) : (
        dishes.map((dish) => (
          <DishItem
            key={dish.id}
            dish={dish}
            onAdd={() => null}
            children={<Buttons dish={dish} onDelete={() => onDeleteDish(dish.id)} deleteLoading={deleteLoading}  />}          />
        ))
      )}
    </>
  );
};

export default Dishes;