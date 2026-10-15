/**
 * Static course catalogue. In a real app this would come from an API —
 * keeping it in one module makes that swap a one-line change.
 */
export const FEATURED_COURSES = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'code',
    blurb: 'HTML, CSS, JavaScript and modern frameworks — build production-ready sites.',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    icon: 'data',
    blurb: 'Python, statistics and machine learning with real-world datasets.',
  },
  {
    id: 'app-development',
    title: 'App Development',
    icon: 'mobile',
    blurb: 'Ship native-quality iOS and Android apps from a single codebase.',
  },
];

export const ALL_COURSES = [
  { id: 1, title: 'Full-Stack Web Development', category: 'Web Development', level: 'Beginner', duration: '12 weeks', rating: 4.8, students: 12400, price: 4999, popular: true },
  { id: 2, title: 'React & Modern Frontend', category: 'Web Development', level: 'Intermediate', duration: '8 weeks', rating: 4.9, students: 9800, price: 3999 },
  { id: 3, title: 'Python for Data Science', category: 'Data Science', level: 'Beginner', duration: '10 weeks', rating: 4.7, students: 15200, price: 4499, popular: true },
  { id: 4, title: 'Machine Learning Foundations', category: 'Data Science', level: 'Advanced', duration: '14 weeks', rating: 4.8, students: 6100, price: 6999 },
  { id: 5, title: 'Flutter App Development', category: 'App Development', level: 'Intermediate', duration: '9 weeks', rating: 4.6, students: 7300, price: 4299 },
  { id: 6, title: 'iOS with Swift', category: 'App Development', level: 'Beginner', duration: '10 weeks', rating: 4.7, students: 5400, price: 4799 },
  { id: 7, title: 'Node.js & APIs', category: 'Web Development', level: 'Intermediate', duration: '6 weeks', rating: 4.7, students: 8200, price: 3499 },
  { id: 8, title: 'SQL & Data Analytics', category: 'Data Science', level: 'Beginner', duration: '6 weeks', rating: 4.8, students: 11000, price: 2999, popular: true },
  { id: 9, title: 'Android with Kotlin', category: 'App Development', level: 'Advanced', duration: '12 weeks', rating: 4.5, students: 4100, price: 5499 },
];

export const CATEGORIES = ['All', 'Web Development', 'Data Science', 'App Development'];

export const TRUSTED_BY = ['Google', 'Netflix', 'Airbnb', 'Amazon', 'Facebook'];

export const SOLUTION_POINTS = [
  { title: 'Flexible learning', text: 'Learn at your own pace with lifetime access to every lesson.' },
  { title: 'Expert instructors', text: 'Taught by practitioners currently working in the industry.' },
  { title: 'Interactive community', text: 'Live sessions, peer reviews and a mentor who answers within hours.' },
];
