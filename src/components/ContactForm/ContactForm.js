import { useState } from 'react';
import {
  useCreateContactMutation,
  useGetContactsItemsQuery,
} from 'redux/contactsApi';
import css from './ContactForm.module.css';
import { TextField, Stack, Button } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();

  const { data: items = [] } = useGetContactsItemsQuery();

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      number,
    };
    const sameName = items.map(item => item.name).includes(data.name);
    if (sameName) {
      alert(`${data.name} is already in contacts. Do you want to change data?`);
      setName('');
      setNumber('');
      return;
    }
    createContact(data);
    setName('');
    setNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
          required
          helperText="Please enter name"
          id="demo-helper-text-aligned"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>
      <label>
        <TextField
          type="tel"
          name="phone"
          value={number}
          required
          helperText="Please enter phonenumber "
          id="demo-helper-text-aligned"
          label="Telephon number"
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </label>
      <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained" size="medium">
          Add
        </Button>
      </Stack>
    </form>
  );
};
export default ContactForm;
