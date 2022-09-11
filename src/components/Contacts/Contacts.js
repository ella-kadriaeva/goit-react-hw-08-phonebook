import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Contacts.module.css';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { Toolbar, Typography, AppBar, Container, Box } from '@mui/material';

import { useSelector } from 'react-redux';

import { useLogoutMutation } from 'redux/authApi';

const Contacts = () => {
  const { token } = useSelector(state => state.user);
  const [logout] = useLogoutMutation();

  const onLogoutClick = () => {
    logout();
  };
  return (
    <>
      {token && (
        <>
          <AppBar>
            <Container maxWidth="sm">
              <Box sx={{ bgcolor: 'inherit', height: '15vh' }}>
                <Toolbar>
                  <Typography variant="h6" sx={{ flexGrow: 2 }}>
                    <NavLink className={css.navLink} to={'/'}>
                      Phonebook
                    </NavLink>
                    <NavLink className={css.active} to={'/contacts'}>
                      My contacts
                    </NavLink>
                    <NavLink
                      className={css.navLink}
                      onClick={onLogoutClick}
                      to={'/'}
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
