import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.wrap}>
      <div className={css.apps}>
        <div className={css.title}>Save your contacts in Phonebook</div>
        <div className={css.app}></div>
        <div className={css.app}></div>
        <div className={css.app}></div>
        <div className={css.app}></div>
      </div>
    </div>
  );
};
export default Home;
