import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NotFound() {
  return (
    <Container sx={{ py: { xs: 10, md: 16 }, textAlign: 'center' }}>
      <Typography variant="h1" component="p" sx={{ color: 'primary.main', fontWeight: 700 }}>
        404
      </Typography>
      <Typography variant="h3" component="h1" sx={{ mt: 1 }}>
        Page not found
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1.5 }}>
        The page you’re looking for doesn’t exist or has moved.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button component={RouterLink} to="/" variant="contained" color="primary">
          Back to home
        </Button>
      </Box>
    </Container>
  );
}
