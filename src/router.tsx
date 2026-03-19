import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/index.html';
import AboutPage from './pages/about.html';
import BlogPage from './pages/blog.html';
import BlogDetails from './pages/blogdetails.html';
import ContactPage from './pages/contact.html';
import ServicesPage from './pages/services.html';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetails />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
]);