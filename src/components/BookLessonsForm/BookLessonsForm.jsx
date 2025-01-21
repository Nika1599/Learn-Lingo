import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './BookLessonsForm.module.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
});

export const BookLessonsForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log('Form submitted:', data);
    onClose();
  };
  return (
    <div>
      <h3>Book trial lesson</h3>
      <p>
        {' '}
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <p>Your teacher</p>
      <p>Teacher's name</p>
      <>
        <h3>What is your main reason for learning English?</h3>
        <label>
          <input type="radio" name="reason" value="career" />
          Career and business
        </label>
        <label>
          <input type="radio" value="kids" name="reason" />
          Lesson for kids
        </label>
        <label>
          <input type="radio" value="abroad" name="reason" />
          Living abroad
        </label>
        <label>
          <input type="radio" value="exams" name="reason" />
          Exams and coursework
        </label>
        <label>
          <input type="radio" value="culture" name="reason" />
          Culture, travel or hobby
        </label>
      </>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name')}
          placeholder="Full name"
          type="name"
          required
        />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}
        <input
          {...register('email')}
          placeholder="Email"
          type="email"
          required
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
        <input
          {...register('phone')}
          placeholder="Phone number"
          type="phoneNumber"
          required
        />

        <button type="submit">Book</button>
      </form>
    </div>
  );
};
