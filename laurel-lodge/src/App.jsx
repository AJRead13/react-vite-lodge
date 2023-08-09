import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Outlet, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Calendar from './pages/Calendar'
import Members from './pages/Members'
import ErrorPage from './pages/Error'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>


      </Router>
    </>
  )
}

export default App
