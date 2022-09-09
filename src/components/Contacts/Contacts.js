import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Contacts.module.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import {
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Container,
  Box,
} from '@mui/material';

import { useGetContactsItemsQuery } from 'redux/contactsApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'redux/authApi';

const Contacts = () => {
  const { data, isFetching } = useGetContactsItemsQuery();
  const { token } = useSelector(state => state.user);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const onLogoutClick = () => {
    logout(token);
    navigate('/');
  };
  return (
    <>
      {isFetching && <div>Loading...</div>}
      {data && (
        <>
          <AppBar>
            <Container maxWidth="sm">
              <Box sx={{ bgcolor: 'inherit', height: '15vh' }}>
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                    <NavLink className={css.navLink} to={'/'}>
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                      >
                        <ContactPhoneIcon />
                      </IconButton>
                      Phonebook
                    </NavLink>
                    <NavLink className={css.active} to={'/'}>
                      My contacts
                    </NavLink>
                    <NavLink
                      className={css.navLink}
                      onClick={onLogoutClick}
                      to={'/users/login'}
                    >
                      Logout
                    </NavLink>
                  </Typography>
                  <Filter />
                </Toolbar>
              </Box>
            </Container>
          </AppBar>
          <Container maxWidth="sm">
            <Box sx={{ bgcolor: 'inherit', height: '50vh' }}>
              <ContactList />
              <ContactForm />
            </Box>
          </Container>
        </>
      )}
    </>
  );
};

export default Contacts;
