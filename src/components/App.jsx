import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useCurrentUserQuery } from '../redux/authApi';
import Loader from './Loader/Loader';
const Layout = lazy(() => import('./Layout/Layout'));
const SignUp = lazy(() => import('./SignUp/SignUp'));
const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const Login = lazy(() => import('./Login/Login'));

export default function App() {
  const { data } = useCurrentUserQuery();

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="contacts" element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<SignUp />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
