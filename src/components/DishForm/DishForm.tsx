import {ApiDish, DishFormType} from '../../types';
import React, {useState} from 'react';
import ButtonSpinner from '../Spinner/ButtonSpinner';

interface DishProps {
  onSubmit: (dish: ApiDish) => void;
  existingDish?: ApiDish;
  isLoading?: boolean;
}
const emptyState: DishFormType = {
  title: '',
  price: '',
  image: '',
};

const DishForm: React.FC<DishProps> = ({onSubmit, existingDish, isLoading}) => {

  const initialState: DishFormType = existingDish
    ? { ...existingDish, price: existingDish.price.toString() }
    : emptyState;

  const [dish, setDish] = useState<DishFormType>(initialState);

  const changeDish = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDish((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      ...dish,
      price: parseFloat(dish.price),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{existingDish ? 'Edit dish' : 'Add new dish'}</h4>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="form-control w-50 mb-3"
          onChange={changeDish}
          value={dish.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          required
          min="1"
          className="form-control w-50 mb-3"
          onChange={changeDish}
          value={dish.price}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          id="image"
          required
          className="form-control w-50 mb-3"
          onChange={changeDish}
          value={dish.image}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2"
        disabled={isLoading}
      >
        {isLoading && <ButtonSpinner/>}
        {existingDish ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default DishForm;