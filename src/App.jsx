import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Route-level code splitting: each page is only downloaded when visited.
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PAGE_TITLES = {
  '/': 'ClassIQ — Empower Your Learning Journey',
  '/courses': 'All Courses — ClassIQ',
  '/signup': 'Create your account — ClassIQ',
  '/signin': 'Sign in — ClassIQ',
};

/** Keeps document.title in sync with the route and scrolls to top on navigation. */
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? 'ClassIQ';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <RouteEffects />
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Suspense fallback={<LinearProgress color="primary" sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}
