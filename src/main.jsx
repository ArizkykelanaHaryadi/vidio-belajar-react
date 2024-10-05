import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import RegistPage from './Pages/RegistPage'
import HomePage from './Pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <div>404</div>,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/regist',
    element: <RegistPage />,
  },
  {
    path: '/home',
    element: <HomePage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
    <RouterProvider router={router} />
  </StrictMode>,
)
