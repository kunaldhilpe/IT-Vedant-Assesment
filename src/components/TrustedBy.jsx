import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { TRUSTED_BY } from '../data/courses';

/**
 * "Trusted by" strip. Company names are rendered as plain text so the page ships
 * no third-party logo assets — drop the official SVGs in here if you have licence to use them.
 */
export default function TrustedBy() {
  return (
    <Box component="section" aria-label="Trusted by companies" sx={{ py: { xs: 5, md: 7 } }}>
      <Container>
        <Typography align="center" color="text.secondary" variant="body2" sx={{ fontWeight: 500 }}>
          Trusted by 5,000+ Companies Worldwide
        </Typography>
        <Stack
          component="ul"
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          spacing={{ xs: 3, sm: 5, md: 8 }}
          sx={{ listStyle: 'none', p: 0, mt: 3, mb: 0 }}
        >
          {TRUSTED_BY.map((name) => (
            <Typography
              key={name}
              component="li"
              sx={{
                fontSize: { xs: '1.05rem', md: '1.35rem' },
                fontWeight: 600,
                color: 'text.secondary',
                opacity: 0.6,
                letterSpacing: '0.02em',
                transition: 'opacity .2s ease, color .2s ease',
                '&:hover': { opacity: 1, color: 'text.primary' },
              }}
            >
              {name}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
