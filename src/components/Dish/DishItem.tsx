import React from 'react';
import {Dish} from '../../types';
import {NavLink} from 'react-router-dom';
import ButtonSpinner from '../Spinner/ButtonSpinner';

interface Props {
  dish: Dish;
  onDelete: VoidFunction;
  deleteLoading: false | string;
}

const DishItem: React.FC<Props> = ({dish, onDelete, deleteLoading}) => {

  return (
    <div className="card mb-2 p-2">
      <div className="row g-0 align-items-center">
        <div className="col-8 d-flex align-items-center">
          <img src={dish.image} alt={dish.title} className="rounded float-start"
               style={{width: '100px', height: '100px'}}/>
          <span className="card-title ms-4 fs-4">{dish.title}</span>
        </div>
        <div className="col-2">
          <div className="card-text fw-semibold">{dish.price} KGS</div>
        </div>
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
    </div>
  );
};

export default DishItem;
