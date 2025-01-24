import { useSelector } from 'react-redux';
import { TeacherCard } from '../Teachers/TeacherCard/TeacherCard.jsx';

const FavouritePage = () => {
  const favourites = useSelector(state => state.favourites.favourites);
  const { teachers } = useSelector(state => state.teachers);

  const favoriteTeachers = teachers.filter(teacher =>
    favourites.includes(teacher.id),
  );

  return (
    <div>
      <h2>Your Favorites</h2>
      {favoriteTeachers.length > 0 ? (
        <div>
          {favoriteTeachers.map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      ) : (
        <p>You have no favorites yet.</p>
      )}
    </div>
  );
};

export default FavouritePage;
