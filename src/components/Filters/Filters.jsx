import { useDispatch, useSelector } from 'react-redux';
import {
  setLanguage,
  setLevel,
  setPrice,
  resetFilters,
} from '../../pages/teachersInfo/filterSlice';

export const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const handleFilterChange = e => {
    const { name, value } = e.target;
    if (name === 'language') {
      dispatch(setLanguage(value));
    } else if (name === 'level') {
      dispatch(setLevel(value));
    } else if (name === 'price') {
      dispatch(setPrice(value));
    }
  };
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div>
      <div>
        <label>Languages</label>
        <select
          name="language"
          onChange={handleFilterChange}
          value={filters.language}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Mandarin Chinese">Mandarin Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Korean">Korean</option>
          <option value="Vietnamese">Vietnamese</option>
        </select>
      </div>
      <div>
        <label>Level of knowledge</label>
        <select
          name="level"
          onChange={handleFilterChange}
          value={filters.level}
        >
          <option value="A1 Beginner">A1 Beginner</option>
          <option value="A2 Elementary">A2 Elementary</option>
          <option value="B1 Intermediate">B1 Intermediate</option>
          <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
          <option value="C1 Advanced">C1 Advanced</option>
          <option value="C2 Proficient">C2 Proficient</option>
        </select>
      </div>
      <div>
        <label>Price</label>
        <select
          name="price"
          onChange={handleFilterChange}
          value={filters.price}
        >
          <option value="25">25</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="30">30</option>
          <option value="32">32</option>
          <option value="35">35</option>
        </select>
      </div>
      <button onClick={handleResetFilters}>Show All Teachers</button>
    </div>
  );
};
