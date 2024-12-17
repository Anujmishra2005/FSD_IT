import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import '../App.css'

const Home = () => {
  return (
    <div>
        <Header />
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
        <Footer />

    </div>
  )
}

export default Home