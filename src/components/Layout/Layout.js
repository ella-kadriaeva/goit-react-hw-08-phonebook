import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
            to="users/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
            to="users/register"
          >
            SignUp
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.navLink)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
