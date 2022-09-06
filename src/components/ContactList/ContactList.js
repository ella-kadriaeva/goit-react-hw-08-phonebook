import React from 'react';
import css from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import {
  useGetContactsItemsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

const getVisibleContacts = (items, value) => {
  const normalizedFilter = value.toLowerCase().trim();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

export default function ContactList() {
  const { data: items = [] } = useGetContactsItemsQuery();
  const filterValue = useSelector(state => state.filter.value);
  const filtredContacts = getVisibleContacts(items, filterValue);
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = contactId => deleteContact(contactId);
  return (
    <div className={css.table}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Phonenumber</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtredContacts.map(({ id, name, number }) => (
              <ContactListItem
                key={id}
                name={name}
                number={number}
                itemId={id}
                deleteContacts={handleDeleteContact}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
