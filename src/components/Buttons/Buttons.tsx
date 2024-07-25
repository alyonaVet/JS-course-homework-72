import {NavLink} from 'react-router-dom';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import React from 'react';
import {Dish} from '../../types';

interface ButtonsProps {
  dish: Dish;
  onDelete: VoidFunction;
  deleteLoading: false | string;
}

const Buttons: React.FC<ButtonsProps> = ({dish, onDelete, deleteLoading}) => {
  return (
    <div className="me-4">
      <div className="col-2">
        <div className="d-flex gap-2">
          <NavLink className="btn btn-primary px-4" to={`/admin/edit-dish/${dish.id}`}>
            Edit
          </NavLink>
          <button
            className="btn btn-danger"
            onClick={onDelete}
            disabled={deleteLoading ? deleteLoading === dish.id : false}
          >
            {deleteLoading && deleteLoading === dish.id && (<ButtonSpinner/>)}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;