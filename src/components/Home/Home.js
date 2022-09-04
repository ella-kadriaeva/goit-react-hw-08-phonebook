import css from './Home.module.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <h2 className={css.home__title}> You are on the phonebook </h2>
      <Link to={'users/login'}>Sign In</Link> or{' '}
      <Link to={'/users/register'}>Sign Up</Link> to get started.
    </>
  );
};
export default Home;
