import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from './Logo';

const COLUMNS = [
  {
    title: 'Course & Business',
    links: ['Web Development', 'Data Science', 'App Development', 'For Business'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Contact'],
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [toast, setToast] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setEmail('');
    setToast(true);
  };

  return (
    <Box component="footer" sx={{ bgcolor: 'background.subtle', borderTop: 1, borderColor: 'divider', mt: { xs: 6, md: 10 } }}>
      <Container sx={{ py: { xs: 5, md: 7 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Logo />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, maxWidth: 360 }}>
              Learn in-demand skills from industry experts and join a community of professionals growing together.
            </Typography>

            <Box component="form" onSubmit={subscribe} noValidate sx={{ mt: 3, maxWidth: 400 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Subscribe to our newsletter
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="flex-start">
                <TextField
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={Boolean(error)}
                  helperText={error}
                  inputProps={{ 'aria-label': 'Email address', autoComplete: 'email' }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ flexShrink: 0, minWidth: 120 }}>
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Grid>

          {COLUMNS.map((col) => (
            <Grid key={col.title} size={{ xs: 6, md: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                {col.title}
              </Typography>
              <Stack component="ul" spacing={1} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {col.links.map((label) => (
                  <li key={label}>
                    <Link
                      component={RouterLink}
                      to="/courses"
                      underline="none"
                      color="text.secondary"
                      variant="body2"
                      sx={{ '&:hover': { color: 'text.primary' } }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </Stack>
            </Grid>
          ))}

          <Grid size={{ xs: 12, md: 1 }}>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              Follow
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <IconButton size="small" aria-label="ClassIQ on Facebook" href="#" color="inherit">
                <FacebookRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" aria-label="ClassIQ on Instagram" href="#" color="inherit">
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" aria-label="ClassIQ on LinkedIn" href="#" color="inherit">
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} ClassIQ. All rights reserved.
        </Typography>
      </Container>

      <Snackbar open={toast} autoHideDuration={3000} onClose={() => setToast(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled" onClose={() => setToast(false)} sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
          You&apos;re subscribed. Welcome aboard!
        </Alert>
      </Snackbar>
    </Box>
  );
}
