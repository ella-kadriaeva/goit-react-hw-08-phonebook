import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedin = useSelector(state => state.user.isLoggedIn);
  const shouldRedirect = isLoggedin && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}
