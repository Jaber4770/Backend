import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router";
import UserDetails from './Components/UserDetails.jsx';
import MainLayout from './MainLayout.jsx';
import Edit from './Components/Edit.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        Component: App,
        index: true
      },
      {
        path: '/userdetails/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UserDetails,
      },
      {
        path: '/edit/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: Edit
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
