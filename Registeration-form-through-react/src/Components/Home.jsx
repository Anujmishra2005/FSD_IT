import React from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import '../App.css'

const Home = () => {
  return (
    <div>
        <Header />
        <nav>
            <ul>
                <li>
                    <Link to = "/login">Login</Link>
                </li>
                <li>
                    <Link to = "/register">Registeration</Link>
                </li>
            </ul>
            <Outlet />
        </nav>
        <Footer />
    </div>
  )
}

export default Home