import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Aboutus from './pages/Aboutus';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/Productdetail';
import Signup from './pages/Signup';
import Success from './pages/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <Aboutus />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/success',
        element: <Success />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
);
