import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
const SignUp = lazy(() => import('./SignUp/SignUp'));
const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const Login = lazy(() => import('./Login/Login'));
const Layout = lazy(() => import('./Layout/Layout'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="users/login" element={<Login />} />
          <Route path="users/register" element={<SignUp />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
