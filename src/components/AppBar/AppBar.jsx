import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AppBar = () => {
  return (
    <header className={css.header}>
      <p className={css.logo}>LearnLingo</p>

      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/teachers">
          Teachers
        </NavLink>
        <NavLink className={css.link} to="/">
          Log in
        </NavLink>
        <button type="button" className={css.registerBtn}>
          Registration
        </button>
      </nav>
    </header>
  );
};
