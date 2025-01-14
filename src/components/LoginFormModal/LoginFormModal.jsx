import css from './LoginFormModal.module.css';

export const LoginFormModal = ({ onCloseModal }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button
          type="submit"
          aria-label="Close modal button"
          className={css.closeModalBtn}
          onClick={onCloseModal}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 8L8 24"
              stroke="#121417"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#121417"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h3 className={css.modalTitle}>Log In</h3>
        <p className={css.modalText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>
    </div>
  );
};
