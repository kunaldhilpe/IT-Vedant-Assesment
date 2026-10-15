import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import heroIllustration from '../assets/hero-illustration.svg';

const STATS = [
  { value: '5,000+', label: 'Companies hiring' },
  { value: '120k+', label: 'Active learners' },
  { value: '4.8★', label: 'Average rating' },
];

export default function Hero() {
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.subtle',
        // soft radial glow behind the illustration, as in the Figma hero
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: (t) =>
            t.palette.mode === 'dark'
              ? 'radial-gradient(60% 60% at 80% 40%, rgba(126,211,33,0.16) 0%, transparent 70%)'
              : 'radial-gradient(60% 60% at 80% 40%, rgba(126,211,33,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container sx={{ position: 'relative', py: { xs: 7, md: 11 } }}>
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            {/* <Chip
              label="New: Data Science cohort starts Nov 2"
              size="small"
              sx={{ mb: 2.5, bgcolor: 'rgba(126,211,33,0.18)', color: 'text.primary', fontWeight: 500 }}
            /> */}
            <Typography id="hero-title" variant="h1" component="h1">
              Empower Your
              <br />
              Learning Journey
              <br />
              with{' '}
              <Box component="span" sx={{ fontWeight: 700 }}>
                ClassIQ
              </Box>
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2.5, maxWidth: 480 }}>
              Industry-certified courses designed by experts, built for working professionals. Learn flexibly,
              build real projects and get hired faster.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
              <Button
                component={RouterLink}
                to="/courses"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Explore Courses
              </Button>
              <Button component={RouterLink} to="/signup" variant="outlined" color="inherit" size="large">
                Start for free
              </Button>
            </Stack>

            <Stack direction="row" spacing={{ xs: 3, sm: 5 }} sx={{ mt: 5 }} useFlexGap flexWrap="wrap">
              {STATS.map((s) => (
                <Box key={s.label}>
                  <Typography variant="h4" component="p" sx={{ fontWeight: 700 }}>
                    {s.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                maxWidth: 460,
                mx: 'auto',
                animation: 'float 6s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-12px)' },
                },
              }}
            >
              <img
                src={heroIllustration}
                alt="A smiling learner waving hello"
                width="420"
                height="420"
                fetchPriority="high"
                decoding="async"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
