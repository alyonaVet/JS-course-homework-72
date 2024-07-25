import {NavLink} from 'react-router-dom';
import Dishes from '../../components/Dish/Dishes';

const AdminPage = () => {

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-3 border-bottom pb-3">
        <div className="fs-4">Dishes</div>
        <NavLink to="/admin/new-dish" className="btn btn-outline-primary me-3 px-4">Add new Dish</NavLink>
      </div>
      <div className="container d-flex flex-column gap-2 mt-3">
        <Dishes  />
      </div>
    </>
  );
};

export default AdminPage;