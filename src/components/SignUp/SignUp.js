import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from 'redux/authApi';
import css from './SignUp.module.css';

const SignUp = () => {
  const [signup, status] = useSignupMutation();
  const { isLoading } = status;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeEmail = e => setEmail(e.currentTarget.value);
  const handleChangePassword = e => setPassword(e.currentTarget.value);

  const handleSubmitUser = e => {
    e.preventDefault();
    const credentials = {
      name,
      email,
      password,
    };
    signup(credentials);
    navigate('/users/login');
    e.target.reset();
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>SignUp</h2>
      <form className={css.form} onSubmit={handleSubmitUser}>
        <label>
          <span>Login</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Enter login"
            required
          />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            pattern=".+@globex\.com"
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
            required
          />
        </label>
        <button type="submit" disabled={isLoading}>
          SignUp
        </button>
      </form>
    </div>
  );
};
export default SignUp;
