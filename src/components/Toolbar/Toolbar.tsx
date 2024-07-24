import {NavLink, useLocation} from 'react-router-dom';

const Toolbar = () => {

  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <NavLink to="/" className="navbar-brand fw-semibold text-white">Turtle Pizza</NavLink>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <NavLink to="/admin" className="navbar-brand">Turtle Pizza Admin</NavLink>
        </div>
        <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/admin/dishes" className="nav-link">Dishes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/order" className="nav-link">Orders</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;