import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Aboutus from './pages/Aboutus';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/Productdetail';
import SearchResult from './pages/SearchResult';
import Signup from './pages/Signup';

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
        path: '/result',
        element: <SearchResult />,
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
);
