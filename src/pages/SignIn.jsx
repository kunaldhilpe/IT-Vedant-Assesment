import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AuthCard from '../components/AuthCard';
import PasswordField from '../components/PasswordField';
import useForm, { EMAIL_RE } from '../components/useForm';

const validate = (v) => {
  const e = {};
  if (!v.email) e.email = 'Email is required.';
  else if (!EMAIL_RE.test(v.email)) e.email = 'Enter a valid email address.';
  if (!v.password) e.password = 'Password is required.';
  return e;
};

export default function SignIn() {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const { submitting, field, handleSubmit } = useForm({ email: '', password: '' }, validate);

  const onValid = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setDone(true);
    setTimeout(() => navigate('/courses'), 1000);
  };

  return (
    <AuthCard
      title="Login"
      subtitle="Welcome back — pick up where you left off."
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link component={RouterLink} to="/signup" underline="hover" sx={{ fontWeight: 600 }}>
            Signup
          </Link>
        </>
      }
    >
      {done && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Logged in — opening your courses…
        </Alert>
      )}
      <Box component="form" noValidate onSubmit={handleSubmit(onValid)}>
        <Stack spacing={1}>
          <TextField
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            autoComplete="email"
            autoFocus
            {...field('email')}
          />
          <PasswordField label="Password" placeholder="Enter Your Password" autoComplete="current-password" {...field('password')} />

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <FormControlLabel
              control={<Checkbox size="small" color="primary" defaultChecked />}
              label="Remember me"
              slotProps={{ typography: { variant: 'body2' } }}
            />
            <Link component={RouterLink} to="#" variant="body2" underline="hover">
              Forgot password?
            </Link>
          </Stack>

          <Button type="submit" variant="contained" color="primary" size="large" disabled={submitting || done} sx={{ mt: 1 }}>
            {submitting ? 'Signing in…' : 'Signin'}
          </Button>
        </Stack>
      </Box>
    </AuthCard>
  );
}
