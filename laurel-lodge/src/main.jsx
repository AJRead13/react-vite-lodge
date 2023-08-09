import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Outlet, Link, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Calendar from './pages/Calendar'
import Members from './pages/Members'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Members',
        element: <Members />,
      },
      {
        path: 'Calendar',
        element: <Calendar />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactProvider router={router} />,
)
