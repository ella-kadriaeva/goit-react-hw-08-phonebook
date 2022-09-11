import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoure/PrivateRoure';
import PublicRoute from './PublicRoute/PublicRoute';
import Loader from './Loader/Loader';

const SignUp = lazy(() => import('./SignUp/SignUp'));
const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const Login = lazy(() => import('./Login/Login'));
const Layout = lazy(() => import('./Layout/Layout'));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/users/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/users/register"
            element={
              <PublicRoute restricted>
                <SignUp />
              </PublicRoute>
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
