import DishForm from '../../components/DishForm/DishForm';
import {createDish} from '../../features/dishes/dishesThuks';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCreateDishLoading} from '../../features/dishes/dishesSlice';
import {ApiDish} from '../../types';

const NewDish = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectCreateDishLoading);

  const onSubmit = async (dish: ApiDish) => {
    try {
      await dispatch(createDish(dish)).unwrap();
      navigate('/admin/dishes');
    } catch (error) {
      console.error('Could not create dish!');
    }
  };

  return (
    <div className="container mt-3">
      <DishForm
        onSubmit={onSubmit}
        isLoading={isCreating}
      />
    </div>
  );
};

export default NewDish;