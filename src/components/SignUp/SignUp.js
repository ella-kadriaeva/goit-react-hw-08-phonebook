import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from 'redux/authApi';
import css from './SignUp.module.css';
import { Container, Box, TextField, Stack, Button } from '@mui/material';

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

  const handleSubmitUser = async e => {
    e.preventDefault();
    const credentials = {
      name,
      email,
      password,
    };

    await signup(credentials);
    navigate('/contacts');
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmitUser}>
              <label>
                <TextField
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChangeName}
                  placeholder="Enter login"
                  required
                  helperText="Please enter your name"
                  id="demo-helper-text-aligned"
                  label="Name"
                  autoComplete="username "
                />
              </label>
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
                  autoComplete="username "
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
                  autoComplete="new-password"
                />
              </label>
              <Stack spacing={2} direction="row">
                <Button
                  type="submit"
                  disabled={isLoading}
                  variant="contained"
                  size="medium"
                >
                  SignUp
                </Button>
              </Stack>
            </form>
          </div>
        </Box>
      </Container>
    </>
  );
};
export default SignUp;
