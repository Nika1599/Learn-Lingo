import { useForm } from 'react-hook-form';
import css from './RegisterFormModal.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerUser } from '../../pages/auth/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const RegisterFormModal = () => {
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
      await dispatch(
        registerUser({ email: data.email, password: data.password }),
      );
      toast.success('Registration successful! Welcome!');
      reset();
    } catch (error) {
      console.error('Registration error: ', error);
      toast.error('Failed to register. Please try again.');
    }
  };

  return (
    <>
      <h3 className={css.modalTitle}>Registration</h3>
      <p className={css.modalText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" type="name" required />
        <p>{errors.name?.message}</p>

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
