import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import {
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Container,
  Box,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <>
      <AppBar>
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: 'inherit', height: '10vh' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <ContactPhoneIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                <NavLink className={css.navLink} to={'/'}>
                  Phonebook
                </NavLink>
              </Typography>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.navLink
                }
                to={'/users/login'}
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.navLink
                }
                to={'/users/register'}
              >
                Sign Up
              </NavLink>
            </Toolbar>
          </Box>
        </Container>
      </AppBar>
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default Layout;
