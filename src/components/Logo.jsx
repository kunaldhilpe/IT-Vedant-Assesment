import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/** Brand mark + wordmark. Inline SVG so it needs no extra request and inherits theme colours. */
export default function Logo({ size = 28 }) {
  return (
    <Box
      component={RouterLink}
      to="/"
      aria-label="ClassIQ home"
      sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'text.primary' }}
    >
      <Box
        component="svg"
        viewBox="0 0 64 64"
        width={size}
        height={size}
        aria-hidden="true"
        sx={{ flexShrink: 0 }}
      >
        <rect width="64" height="64" rx="14" fill="#7ED321" />
        <path
          d="M18 44 L26 18 L32 36 L38 18 L46 44"
          fill="none"
          stroke="#0E1A0A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="46" r="3.5" fill="#0E1A0A" />
      </Box>
      <Typography component="span" sx={{ fontWeight: 700, fontSize: size * 0.68, letterSpacing: '-0.01em' }}>
        ClassIQ
      </Typography>
    </Box>
  );
}
