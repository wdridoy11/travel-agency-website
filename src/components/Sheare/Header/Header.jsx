import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import Container from '../container/Container'
import { AuthContext } from '../../../providers/AuthProvider'
const Header = () => {

  const {user} = useContext(AuthContext)
  const navMenu=<>
    <li><Link>Home</Link></li>
    <li><Link>Place</Link></li>
    {/* {user ?} */}
  </>

  return (
    <div>
      <div>
        <Container>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navMenu}
                </ul>
              </div>
              <Link to={'/'}><img width="100" src={Logo} alt="logo" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navMenu}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header