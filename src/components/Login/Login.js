import { useState } from 'react';
import { useLoginMutation } from 'redux/authApi';
import css from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Stack, Button } from '@mui/material';

const Login = () => {
  const [login, status] = useLoginMutation();
  const { isLoading } = status;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleChangeEmail = e => setEmail(e.currentTarget.value);
  const handleChangePassword = e => setPassword(e.currentTarget.value);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    const credentials = {
      email,
      password,
    };
    await login(credentials);
    navigate('/contacts');
    e.target.reset();
  };
  return (
    <>
      {!isLoading && (
        <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& > :not(style)': { m: 1 },
            }}
          >
            <div className={css.container}>
              <form className={css.form} onSubmit={handleSubmit}>
                <label>
                  <TextField
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                    helperText="Please enter your e-mail "
                    id="demo-helper-text-aligned"
                    label="E-mail"
                    autocomplete="username "
                  />
                </label>
                <label>
                  <TextField
                    helperText="Please enter your password"
                    id="demo-helper-text-aligned"
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                    title="Enter password"
                    required
                    autocomplete="new-password"
                  />
                </label>
                <Stack spacing={2} direction="row">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant="contained"
                    size="medium"
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </div>
          </Box>
        </Container>
      )}
    </>
  );
};
export default Login;
