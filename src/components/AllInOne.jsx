import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Reveal from './Reveal';
import heroIllustration from '../assets/hero-illustration.svg';
import { SOLUTION_POINTS } from '../data/courses';

export default function AllInOne() {
  return (
    <Box component="section" aria-labelledby="solution-title" sx={{ py: { xs: 6, md: 9 } }}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Box
                sx={{
                  bgcolor: 'background.card',
                  borderRadius: 4,
                  p: { xs: 3, md: 5 },
                  maxWidth: 460,
                  mx: 'auto',
                }}
              >
                <img src={heroIllustration} alt="" width="420" height="420" loading="lazy" decoding="async" />
              </Box>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={120}>
              <Typography id="solution-title" variant="h2" component="h2">
                All-In-One Solution
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 480 }}>
                Everything you need to go from first lesson to first job offer, in one place.
              </Typography>

              <List disablePadding sx={{ mt: 3 }}>
                {SOLUTION_POINTS.map((p) => (
                  <ListItem key={p.title} disableGutters alignItems="flex-start" sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.4, color: 'primary.main' }}>
                      <CheckCircleRoundedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={p.title}
                      secondary={p.text}
                      primaryTypographyProps={{ fontWeight: 600 }}
                      secondaryTypographyProps={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
              </List>

              <Button
                component={RouterLink}
                to="/signup"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{ mt: 3 }}
              >
                Join Now
              </Button>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
