import css from './LoginFormModal.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const LoginFormModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    console.log({ data });
    reset();
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
