import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MoreInfo } from './MoreInfo/MoreInfo.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import { ToastContainer } from 'react-toastify';
import { checkUserStatus } from '../pages/auth/operations.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Teachers = lazy(() => import('../pages/Teachers/Teachers.jsx'));
const FavouritePage = lazy(() =>
  import('../pages/FavouritePage/FavouritePage.jsx'),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserStatus());
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<MoreInfo />} />
          <Route
            path="/favourites"
            element={
              <PrivateRoute>
                <FavouritePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
