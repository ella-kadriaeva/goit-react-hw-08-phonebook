import { useState } from 'react';
import { useLoginMutation } from 'redux/authApi';
import css from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, status] = useLoginMutation();
  const { isLoading } = status;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleChangeEmail = e => setEmail(e.currentTarget.value);
  const handleChangePassword = e => setPassword(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    const credentials = {
      email,
      password,
    };
    login(credentials);
    navigate('/contacts');
    e.target.reset();
  };
  return (
    <div className={css.container}>
      <fieldset>
        <legend className={css.title}>Login</legend>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              placeholder="user@example.gov"
              required
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
              placeholder="Enter password"
              title="Enter password"
              required
            />
          </label>
          <button type="submit" disabled={isLoading}>
            Login
          </button>
        </form>
      </fieldset>
    </div>
  );
};
export default Login;
