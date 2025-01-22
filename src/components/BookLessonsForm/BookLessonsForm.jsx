import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './BookLessonsForm.module.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  reason: yup.string().required('Please select a reason'),
});

export const BookLessonsForm = ({ teacher, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      reason: 'career',
    },
  });

  const onSubmit = data => {
    console.log('Form submitted:', data);
    onClose();
  };

  return (
    <div>
      <h3>Book trial lesson</h3>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div>
        <p>Your teacher</p>
        <p>
          {teacher.name} {teacher.surname}
        </p>
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          className={css.teacherPhoto}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>What is your main reason for learning English?</h3>
        <label>
          <input {...register('reason')} type="radio" value="career" />
          Career and business
        </label>
        <label>
          <input {...register('reason')} type="radio" value="kids" />
          Lesson for kids
        </label>
        <label>
          <input {...register('reason')} type="radio" value="abroad" />
          Living abroad
        </label>
        <label>
          <input {...register('reason')} type="radio" value="exams" />
          Exams and coursework
        </label>
        <label>
          <input {...register('reason')} type="radio" value="culture" />
          Culture, travel or hobby
        </label>
        {errors.reason && <p className={css.error}>{errors.reason.message}</p>}

        <input {...register('name')} placeholder="Full name" type="text" />
        {errors.name && <p className={css.error}>{errors.name.message}</p>}

        <input {...register('email')} placeholder="Email" type="email" />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}

        <input {...register('phone')} placeholder="Phone number" type="tel" />
        {errors.phone && <p className={css.error}>{errors.phone.message}</p>}

        <button type="submit">Book</button>
      </form>
    </div>
  );
};
