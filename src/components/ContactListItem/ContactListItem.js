import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';
// import css from './ContactListItem.module.css';

import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';

export default function ContactListItem({
  itemId,
  name,
  number,
  deleteContacts,
}) {
  return (
    <TableRow
      itemId={itemId}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {name}:
      </TableCell>
      <TableCell align="right">{number}</TableCell>
      <TableCell align="right">
        {' '}
        <Stack direction="row" spacing={1}>
          <IconButton
            type="button"
            onClick={() => deleteContacts(itemId)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
}
ContactListItem.propTypes = {
  deleteContacts: PropTypes.func,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
