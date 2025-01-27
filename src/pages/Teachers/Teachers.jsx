import { TeacherCard } from './TeacherCard/TeacherCard.jsx';
import { fetchTeachers } from '../auth/operations.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Filters } from '../../components/Filters/Filters.jsx';
import { Outlet } from 'react-router-dom';

export default function Teachers() {
  const dispatch = useDispatch();
  const { teachers, loading, error } = useSelector(state => state.teachers);
  const filters = useSelector(state => state.filters);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const filterTeachers = () => {
    return teachers.filter(teacher => {
      const matchesLanguage = filters.language
        ? teacher.languages.includes(filters.language)
        : true;
      const matchesLevel = filters.level
        ? teacher.levels.includes(filters.level)
        : true;
      const matchesPrice = filters.price
        ? teacher.price_per_hour <= parseInt(filters.price)
        : true;

      return matchesLanguage && matchesLevel && matchesPrice;
    });
  };
  const loadMore = () => {
    setVisibleTeachers(prev => prev + 4);
  };
  const filteredTeachers = filterTeachers();
  return (
    <div className="teachers-page">
      <Filters />
      {isLoggedIn && (
        <Link to="/favourites">
          <button type="button">View Favorites</button>
        </Link>
      )}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <>
          <div>
            {filteredTeachers
              .slice(0, visibleTeachers)
              .map((teacher, index) => (
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
