import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,    
  },
  {
    path: 'esqueceu-a-senha',
    element: <ForgotPassword />
  },
  {
    path: 'dashboard',
    element: <Dashboard />
  },

  
])

const Routes = () => (
  <RouterProvider router={router} />
);

export default Routes;
