import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-sky-300'>
        <div className='container'>
            <div>

            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/place">Place</Link>
                <Link to="/hotel">Hotel</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header