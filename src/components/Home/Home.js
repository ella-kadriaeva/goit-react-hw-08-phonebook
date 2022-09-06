import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={css.wrap}>
        <div class={css.apps}>
          <div class={css.title}>Save your contacts in Phonebook</div>
          <div class={css.app}></div>
          <div class={css.app}></div>
          <div class={css.app}></div>
          <div class={css.app}></div>
        </div>
      </div>
    </>
  );
};
export default Home;
