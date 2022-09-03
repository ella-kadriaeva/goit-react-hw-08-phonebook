import { useState } from 'react';
import { nanoid } from 'nanoid';
// import {
//   useCreateContactMutation,
//   useGetContactsItemsQuery,
// } from 'redux/contactsApi';
import css from './SignUp.module.css';

const SignUp = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  //   const [createUser] = useCreateUserMutation();

  //   const { data: items = [] } = useGetContactsItemsQuery();

  const handleChangeUser = e => setUser(e.currentTarget.value);

  const handleChangeEmail = e => setEmail(e.currentTarget.value);

  const handleSubmitSignUp = e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      user,
      email,
    };
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>SignUp</h2>
      <form className={css.form} onSubmit={handleSubmitSignUp}>
        <label htmlFor={nanoid()}>Name</label>
        <input
          type="text"
          name="name"
          value={user}
          onChange={handleChangeUser}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nanoid()}
        />
        <label htmlFor={nanoid()}>E-mail</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          pattern=".+@globex\.com"
          placeholder="user@example.gov"
          title="Enter email"
          required
          id={nanoid()}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};
export default SignUp;
