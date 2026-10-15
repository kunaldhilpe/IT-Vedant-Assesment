import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/**
 * Centred grey card used by both the SignUp and SignIn frames.
 * Kept presentational so each page owns its own form state.
 */
export default function AuthCard({ title, subtitle, children, footer }) {
  return (
    <Box
      sx={{
        minHeight: 'calc(100dvh - 76px)',
        display: 'grid',
        placeItems: 'center',
        py: { xs: 6, md: 8 },
        background: (t) =>
          t.palette.mode === 'dark'
            ? 'radial-gradient(50% 50% at 50% 0%, rgba(126,211,33,0.10), transparent 70%)'
            : 'radial-gradient(50% 50% at 50% 0%, rgba(126,211,33,0.14), transparent 70%)',
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            bgcolor: 'background.card',
            border: 1,
            borderColor: 'divider',
          }}
        >
          <Typography variant="h3" component="h1" align="center">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
              {subtitle}
            </Typography>
          )}
          <Box sx={{ mt: 3 }}>{children}</Box>
          {footer && (
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3 }}>
              {footer}
            </Typography>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
