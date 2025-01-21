import { TeacherCard } from './TeacherCard/TeacherCard.jsx';
import { fetchTeachers } from '../auth/operations.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Teachers() {
  const dispatch = useDispatch();
  const { teachers, loading, error } = useSelector(state => state.teachers);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleTeachers(prev => prev + 4);
  };

  return (
    <div className="teachers-page">
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <>
          <div>
            {teachers.slice(0, visibleTeachers).map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
          {visibleTeachers < teachers.length && (
            <button onClick={loadMore}>Load More</button>
          )}
        </>
      )}
      <Outlet />
    </div>
  );
}
