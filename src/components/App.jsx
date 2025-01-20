import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MoreInfo } from './MoreInfo/MoreInfo.jsx';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Teachers = lazy(() => import('../pages/Teachers/Teachers.jsx'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />}>
            <Route path="more" element={<MoreInfo />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
