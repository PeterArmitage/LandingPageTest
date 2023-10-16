import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { FeaturesCards } from './components/FeaturesCard/FeaturesCards';
import Pricing from './components/pricing/Pricing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  
]);

export function Router() {
  return <RouterProvider router={router} />;
}
