import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import css from './AppBar.module.css';
import { LoginFormModal } from '../LoginFormModal/LoginFormModal';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

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
        <button onClick={onOpenModal} className={css.loginBtn}>
          Log in
        </button>
        <button type="button" className={css.registerBtn}>
          Registration
        </button>
        {isOpen && <LoginFormModal onCloseModal={onCloseModal} />}
      </nav>
    </header>
  );
};
