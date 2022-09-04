import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Layout = lazy(() => import('./Layout/Layout'));
const SignUp = lazy(() => import('./SignUp/SignUp'));
const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import('./Contacts/Contacts'));
const Login = lazy(() => import('./Login/Login'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="users/login" element={<Login />} />
            <Route path="users/register" element={<SignUp />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
