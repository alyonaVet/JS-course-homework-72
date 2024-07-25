import DishForm from '../../components/DishForm/DishForm';
import Spinner from '../../components/Spinner/Spinner';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';
import {selectFetchOneDishLoading, selectOneDish, selectUpdateDishLoading} from '../../features/dishes/dishesSlice';
import {ApiDish} from '../../types';
import {fetchOneDish, updateDish} from '../../features/dishes/dishesThuks';

const EditDish = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();
  const isOneFetching = useAppSelector(selectFetchOneDishLoading);
  const isUpdating = useAppSelector(selectUpdateDishLoading);
  const dish = useAppSelector(selectOneDish);

  const onSubmit = async (dish: ApiDish) => {
    try {
      await dispatch(updateDish({ id, dish })).unwrap();
      navigate('/admin/dishes');
    } catch (error) {
      console.error('Could not update dish!', error);
    }
  };

  useEffect(() => {
    dispatch(fetchOneDish(id));
  }, [dispatch, id]);

  return (
    <div className="container mt-3">
      <div className="col">
        {isOneFetching && <Spinner />}
        {dish && (
          <DishForm
            onSubmit={onSubmit}
            existingDish={dish}
            isLoading={isUpdating}
          />
        )}
      </div>
    </div>
  );
};

export default EditDish;