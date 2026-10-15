import { useState } from 'react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import Logo from './Logo';
import { useColorMode } from '../theme/ColorModeContext';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useColorMode();
  const { pathname } = useLocation();
  // Adds a subtle shadow once the page scrolls — keeps the bar visually "flat" at the top like the design.
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });

  const close = () => setOpen(false);

  const ModeToggle = (
    <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
      <IconButton onClick={toggle} aria-label="Toggle colour mode" color="inherit" size="small">
        {mode === 'light' ? <DarkModeRoundedIcon fontSize="small" /> : <LightModeRoundedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: (t) => (t.palette.mode === 'dark' ? 'rgba(15,20,16,0.85)' : 'rgba(255,255,255,0.85)'),
        backdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: 1,
        borderColor: scrolled ? 'divider' : 'transparent',
        transition: 'border-color .2s ease',
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 }, gap: 2 }}>
          <Logo />

          {/* Desktop nav */}
          <Box component="nav" aria-label="Primary" sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, ml: 4 }}>
            {NAV_LINKS.map((l) => (
              <Button
                key={l.to}
                component={NavLink}
                to={l.to}
                end={l.to === '/'}
                color="inherit"
                sx={{
                  fontWeight: 500,
                  color: 'text.secondary',
                  '&.active': { color: 'text.primary', fontWeight: 600 },
                  '&:hover': { color: 'text.primary', bgcolor: 'transparent', transform: 'none' },
                }}
              >
                {l.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flex: 1 }} />

          {/* Rendered once and shared by both breakpoints */}
          {ModeToggle}

          {/* Desktop actions */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
            <Button
              component={RouterLink}
              to="/signin"
              variant="contained"
              color="secondary"
              size="small"
              sx={{ px: 2.5 }}
              aria-current={pathname === '/signin' ? 'page' : undefined}
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/signup"
              variant="contained"
              color="primary"
              size="small"
              sx={{ px: 2.5 }}
              aria-current={pathname === '/signup' ? 'page' : undefined}
            >
              Signup
            </Button>
          </Box>

          {/* Mobile actions */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton onClick={() => setOpen(true)} aria-label="Open menu" color="inherit">
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={close} PaperProps={{ sx: { width: 280, p: 2 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Logo size={24} />
          <IconButton onClick={close} aria-label="Close menu">
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <Divider />
        <List component="nav" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <ListItemButton key={l.to} component={NavLink} to={l.to} end={l.to === '/'} onClick={close} sx={{ borderRadius: 2 }}>
              <ListItemText primaryTypographyProps={{ fontWeight: 500 }} primary={l.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ mt: 'auto', display: 'grid', gap: 1.5 }}>
          <Button component={RouterLink} to="/signin" variant="contained" color="secondary" onClick={close} fullWidth>
            Login
          </Button>
          <Button component={RouterLink} to="/signup" variant="contained" color="primary" onClick={close} fullWidth>
            Signup
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
