import { createTheme, responsiveFontSizes } from '@mui/material/styles';

/**
 * Design tokens pulled from the ClassIQ Figma file.
 * Primary: lime green accent on a near-black text colour, Poppins throughout.
 * `mode` lets the same tokens drive a light and a dark palette.
 */
export const getTheme = (mode = 'light') => {
  const isDark = mode === 'dark';

  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#7ED321',
        light: '#A7E85C',
        dark: '#5FA814',
        contrastText: '#0E1A0A',
      },
      secondary: {
        main: '#0E1A0A',
        contrastText: '#FFFFFF',
      },
      background: {
        default: isDark ? '#0F1410' : '#FFFFFF',
        paper: isDark ? '#171D18' : '#FFFFFF',
        subtle: isDark ? '#141A15' : '#F6FBF0',
        card: isDark ? '#1C241D' : '#F4F5F7',
      },
      text: {
        primary: isDark ? '#F2F5EE' : '#0E1A0A',
        secondary: isDark ? '#A9B5A3' : '#5B6B52',
      },
      divider: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(14,26,10,0.08)',
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: '"Poppins", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      h1: { fontWeight: 600, fontSize: '3.25rem', lineHeight: 1.15, letterSpacing: '-0.02em' },
      h2: { fontWeight: 600, fontSize: '2.25rem', lineHeight: 1.2, letterSpacing: '-0.01em' },
      h3: { fontWeight: 600, fontSize: '1.5rem', lineHeight: 1.3 },
      h4: { fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.35 },
      h5: { fontWeight: 600, fontSize: '1.05rem' },
      subtitle1: { fontWeight: 500, fontSize: '1rem' },
      body1: { fontSize: '1rem', lineHeight: 1.7 },
      body2: { fontSize: '0.875rem', lineHeight: 1.6 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
          body: { WebkitFontSmoothing: 'antialiased' },
          'img, svg': { display: 'block', maxWidth: '100%' },
          '@media (prefers-reduced-motion: reduce)': {
            '*': { animation: 'none !important', transition: 'none !important' },
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: 8,
            paddingInline: 20,
            paddingBlock: 9,
            transition: 'transform .15s ease, box-shadow .15s ease, background-color .15s ease',
            '&:hover': { transform: 'translateY(-1px)' },
            '&:active': { transform: 'translateY(0)' },
          },
          containedPrimary: {
            '&:hover': { backgroundColor: '#8FE03A', boxShadow: '0 8px 20px rgba(126,211,33,0.35)' },
          },
          containedSecondary: {
            backgroundColor: isDark ? '#F2F5EE' : '#0E1A0A',
            color: isDark ? '#0E1A0A' : '#FFFFFF',
            '&:hover': { backgroundColor: isDark ? '#FFFFFF' : '#1F2E19' },
          },
          outlined: { borderWidth: 1.5, '&:hover': { borderWidth: 1.5 } },
        },
      },
      MuiTextField: {
        defaultProps: { size: 'small', fullWidth: true },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            backgroundColor: isDark ? '#0F1410' : '#FFFFFF',
          },
        },
      },
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiContainer: {
        defaultProps: { maxWidth: 'lg' },
      },
    },
  });

  theme = responsiveFontSizes(theme, { factor: 2.2 });
  return theme;
};
