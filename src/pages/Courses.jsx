import { useDeferredValue, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import Reveal from '../components/Reveal';
import laptopIllustration from '../assets/laptop-illustration.svg';
import { ALL_COURSES, CATEGORIES } from '../data/courses';

const LEVEL_COLOR = { Beginner: 'success', Intermediate: 'warning', Advanced: 'error' };
const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const compact = new Intl.NumberFormat('en', { notation: 'compact' });

/** Desktop‑2 frame: hero banner + "All Courses" grid, with client-side filtering added. */
export default function Courses() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  // Deferred so typing stays snappy even if the list grows large.
  const deferredQuery = useDeferredValue(query);

  const visible = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return ALL_COURSES.filter(
      (c) => (category === 'All' || c.category === category) && (!q || c.title.toLowerCase().includes(q)),
    );
  }, [category, deferredQuery]);

  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      {/* Banner */}
      <Box
        component="section"
        aria-labelledby="courses-hero"
        sx={{
          bgcolor: 'background.card',
          borderRadius: 4,
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 5 },
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography id="courses-hero" variant="h2" component="h1">
              Enroll in Your Fav Courses
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 520 }}>
              Nine expert-led tracks across web, data and mobile. Filter by category or search to find yours.
            </Typography>
            <TextField
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses…"
              type="search"
              sx={{ mt: 3, maxWidth: 420 }}
              inputProps={{ 'aria-label': 'Search courses' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ maxWidth: 300, ml: 'auto' }}>
              <img src={laptopIllustration} alt="" width="420" height="420" decoding="async" />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Filters + grid */}
      <Box component="section" aria-labelledby="all-courses" sx={{ mt: { xs: 5, md: 7 } }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={2}
        >
          <Typography id="all-courses" variant="h3" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            All Courses <ArrowOutwardRoundedIcon color="primary" />
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" role="group" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <Chip
                key={c}
                label={c}
                clickable
                onClick={() => setCategory(c)}
                color={category === c ? 'primary' : 'default'}
                variant={category === c ? 'filled' : 'outlined'}
                aria-pressed={category === c}
                sx={{ fontWeight: 500 }}
              />
            ))}
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }} aria-live="polite">
          Showing {visible.length} of {ALL_COURSES.length} courses
        </Typography>

        {visible.length === 0 ? (
          <Box sx={{ py: 8, textAlign: 'center' }}>
            <Typography variant="h5">No courses match “{query}”</Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Try a different keyword or clear the category filter.
            </Typography>
            <Button sx={{ mt: 2 }} onClick={() => { setQuery(''); setCategory('All'); }}>
              Clear filters
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {visible.map((course, i) => (
              <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Reveal delay={(i % 3) * 80} sx={{ height: '100%' }}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      bgcolor: 'background.card',
                      borderColor: 'transparent',
                      transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 16px 32px rgba(14,26,10,0.10)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    {/* Course "cover" — a gradient block keeps the page free of raster images. */}
                    <Box
                      aria-hidden="true"
                      sx={{
                        height: 120,
                        background: 'linear-gradient(135deg, rgba(126,211,33,0.35), rgba(126,211,33,0.08))',
                        position: 'relative',
                      }}
                    >
                      {course.popular && (
                        <Chip
                          label="Popular"
                          size="small"
                          color="primary"
                          sx={{ position: 'absolute', top: 12, left: 12, fontWeight: 600 }}
                        />
                      )}
                    </Box>
                    <CardContent sx={{ flex: 1 }}>
                      <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                        <Chip label={course.category} size="small" variant="outlined" />
                        <Chip label={course.level} size="small" color={LEVEL_COLOR[course.level]} variant="outlined" />
                      </Stack>
                      <Typography variant="h5" component="h3">
                        {course.title}
                      </Typography>
                      <Stack direction="row" spacing={2} sx={{ mt: 1.5, color: 'text.secondary' }}>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <ScheduleRoundedIcon sx={{ fontSize: 16 }} />
                          <Typography variant="body2">{course.duration}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <GroupRoundedIcon sx={{ fontSize: 16 }} />
                          <Typography variant="body2">{compact.format(course.students)}</Typography>
                        </Stack>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                        <Rating value={course.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary">
                          {course.rating.toFixed(1)}
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
                      <Typography sx={{ fontWeight: 700 }}>{inr.format(course.price)}</Typography>
                      <Button component={RouterLink} to="/signup" variant="contained" color="primary" size="small">
                        Enroll
                      </Button>
                    </CardActions>
                  </Card>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}
