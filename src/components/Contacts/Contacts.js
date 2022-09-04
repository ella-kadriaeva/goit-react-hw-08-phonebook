import React from 'react';
import css from './Contacts.module.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useGetContactsItemsQuery } from 'redux/contactsApi';

const Contacts = () => {
  useGetContactsItemsQuery();
  const { data, isFetching } = useGetContactsItemsQuery();

  return (
    <div className={css.container}>
      {isFetching && <div>Loading...</div>}
      {data && (
        <>
          <h2 className={css.title}>Phonebook </h2>
          <ContactForm />
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default Contacts;
