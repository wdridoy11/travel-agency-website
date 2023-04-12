import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../image/logo.png'

const Header = () => {
  return (
    <div className='bg-slate-100 py-3'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div>
                  <img className='w-16 h-16' src={Logo} alt="Logo" />
                </div>
                <nav>
                    <Link className='inline-block mx-3 text-base font-semibold' to="/">Home</Link>
                    <Link className='inline-block mx-3 text-base font-semibold' to="/place">Place</Link>
                    <Link className='inline-block mx-3 text-base font-semibold' to="/hotel">Hotel</Link>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header