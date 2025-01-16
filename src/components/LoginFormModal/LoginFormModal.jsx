import css from './LoginFormModal.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInUser } from '../../pages/auth/operations';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const LoginFormModal = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async data => {
    try {
      await dispatch(logInUser({ email: data.email, password: data.password }));
      reset();
    } catch (error) {
      console.error('Login error: ', error);
    }
  };
  return (
    <>
      <h3 className={css.modalTitle}>Log In</h3>
      <p className={css.modalText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          placeholder="Email"
          type="email"
          required
        />
        <p>{errors.email?.message}</p>
        <input
          {...register('password')}
          placeholder="Password"
          type="password"
          required
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};
