import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import css from './AppBar.module.css';
import { Modal } from '../Modal/Modal.jsx';
import { LoginFormModal } from '../LoginFormModal/LoginFormModal.jsx';
import { RegisterFormModal } from '../RegisterFormModal/RegisterFormModal.jsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AppBar = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openLoginModal = () => {
    console.log('Opening login modal');
    setModalContent(<LoginFormModal />);
    setModalIsOpen(true);
  };
  const openRegisterModal = () => {
    console.log('Opening register modal');
    setModalContent(<RegisterFormModal />);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
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
        <button type="button" onClick={openLoginModal} className={css.loginBtn}>
          Log in
        </button>
        <button
          type="button"
          onClick={openRegisterModal}
          className={css.registerBtn}
        >
          Registration
        </button>

        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {modalContent}
          </Modal>
        )}
      </nav>
    </header>
  );
};
