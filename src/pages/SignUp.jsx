import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import AuthCard from '../components/AuthCard';
import PasswordField from '../components/PasswordField';
import useForm, { EMAIL_RE } from '../components/useForm';

const validate = (v) => {
  const e = {};
  if (!v.email) e.email = 'Email is required.';
  else if (!EMAIL_RE.test(v.email)) e.email = 'Enter a valid email address.';
  if (!v.username) e.username = 'Username is required.';
  else if (v.username.length < 3) e.username = 'Use at least 3 characters.';
  if (!v.password) e.password = 'Password is required.';
  else if (v.password.length < 8) e.password = 'Use at least 8 characters.';
  return e;
};

/** 0‑4 score used for the strength meter. Purely a UX hint, not a security guarantee. */
const strength = (p) =>
  [p.length >= 8, /[A-Z]/.test(p), /[0-9]/.test(p), /[^A-Za-z0-9]/.test(p)].filter(Boolean).length;
const STRENGTH_LABEL = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'];
const STRENGTH_COLOR = ['error', 'error', 'warning', 'primary', 'success'];

export default function SignUp() {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const { values, submitting, field, handleSubmit } = useForm({ email: '', username: '', password: '' }, validate);

  const onValid = async () => {
    // Simulate a network round-trip; wire this to a real endpoint when available.
    await new Promise((r) => setTimeout(r, 700));
    setDone(true);
    setTimeout(() => navigate('/signin'), 1200);
  };

  const score = strength(values.password);

  return (
    <AuthCard
      title="SignUp"
      subtitle="Create your free account and start learning today."
      footer={
        <>
          Already have an account?{' '}
          <Link component={RouterLink} to="/signin" underline="hover" sx={{ fontWeight: 600 }}>
            Login
          </Link>
        </>
      }
    >
      {done && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Account created — taking you to login…
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
          <TextField label="Username" placeholder="Enter Your Username" autoComplete="username" {...field('username')} />
          <PasswordField label="Password" placeholder="Enter Your Password" autoComplete="new-password" {...field('password')} />

          {values.password && (
            <Box aria-live="polite">
              <LinearProgress
                variant="determinate"
                value={(score / 4) * 100}
                color={STRENGTH_COLOR[score]}
                sx={{ height: 6, borderRadius: 3 }}
              />
              <Typography variant="caption" color="text.secondary">
                Password strength: {STRENGTH_LABEL[score]}
              </Typography>
            </Box>
          )}

          <Button type="submit" variant="contained" color="primary" size="large" disabled={submitting || done} sx={{ mt: 1 }}>
            {submitting ? 'Creating account…' : 'Signup'}
          </Button>
        </Stack>
      </Box>
    </AuthCard>
  );
}
