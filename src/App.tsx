import Toolbar from './components/Toolbar/Toolbar';
import AdminPage from './containers/AdminPage/AdminPage';
import {Navigate, Route, Routes} from 'react-router-dom';
import NewDish from './containers/NewDish/NewDish';
import EditDish from './containers/EditDish/EditDish';
import ClientPage from './containers/ClientPage/ClientPage';
import Orders from './containers/Orders/Orders';
import {useEffect} from 'react';
import {fetchDishes} from './features/dishes/dishesThuks';
import {useAppDispatch} from './app/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ClientPage />} />
          <Route path="/admin" element={<Navigate to="/admin/dishes" replace={true}/>}/>
          <Route path="/admin/dishes" element={<AdminPage/>}/>
          <Route path="/admin/new-dish" element={<NewDish/>}/>
          <Route path="/admin/edit-dish/:id" element={<EditDish/>}/>
          <Route path="/admin/order" element={<Orders />} />
          <Route path="*" element={<h3 className="mt-3 mb-5 text-center">Page not found</h3>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
