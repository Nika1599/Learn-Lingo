import css from './Home.module.css';
import { AppBar } from '../../components/AppBar/AppBar';
import { LoginFormModal } from '../../components/LoginFormModal/LoginFormModal';

export default function Home() {
  return (
    <main>
      <AppBar />
      <LoginFormModal />
      <h1 className={css.headerTitle}>
        Unlock your potential with the best{' '}
        <span className={css.headerTitlePart}>language</span> tutors
      </h1>
      <p className={css.headerText}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button type="button" className={css.headerBtn}>
        Get started
      </button>
      <section className={css.advantagesSection}>
        <ul className={css.advantages}>
          <li>
            <span>32,000 +</span>
            <p>Experienced tutors</p>
          </li>
          <li>
            <span>300,000 +</span>
            <p>5-star tutor reviews</p>
          </li>
          <li>
            <span>120 +</span>
            <p>Subjects taught</p>
          </li>
          <li>
            <span>200 +</span>
            <p>Tutor nationalities</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
