import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import Reveal from './Reveal';
import { FEATURED_COURSES } from '../data/courses';

const ICONS = {
  code: CodeRoundedIcon,
  data: InsightsRoundedIcon,
  mobile: PhoneIphoneRoundedIcon,
};

export default function CertifiedCourses() {
  return (
    <Box component="section" aria-labelledby="courses-title" sx={{ py: { xs: 6, md: 9 } }}>
      <Container>
        <Reveal>
          <Typography id="courses-title" variant="h2" component="h2" align="center">
            Certified Courses for{' '}
            <Box component="span" sx={{ color: 'primary.dark' }}>
              Professionals
            </Box>
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mt: 1.5, maxWidth: 560, mx: 'auto' }}>
            Pick a track, finish a capstone project and earn a certificate that recruiters recognise.
          </Typography>
        </Reveal>

        <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
          {FEATURED_COURSES.map((course, i) => {
            const Icon = ICONS[course.icon];
            return (
              <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Reveal delay={i * 100} sx={{ height: '100%' }}>
                  <Paper
                    variant="outlined"
                    sx={{
                      height: '100%',
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      bgcolor: 'background.card',
                      borderColor: 'transparent',
                      transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 20px 40px rgba(14,26,10,0.10)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <Box
                      aria-hidden="true"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2.5,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: 'rgba(126,211,33,0.18)',
                        color: 'primary.dark',
                        mb: 2.5,
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography variant="h4" component="h3">
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, mb: 3, flex: 1 }}>
                      {course.blurb}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/courses"
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ px: 3 }}
                    >
                      Enroll Now
                    </Button>
                  </Paper>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
