import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../image/logo.png'
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider'
const LogOut=`https://cdn-icons-png.flaticon.com/512/3889/3889524.png`;
const Header = () => {

  const {user,logOut}=useContext(AuthContext)
  const userLogOut=()=>{
    logOut()
    .then((result)=>{
      console.log(result)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
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
                    {user && <Link className='inline-block mx-3 text-base font-semibold' to={`/profile`}>Profile</Link>}
                    {
                      user ? 
                      <Link className='inline-block mx-3 text-base font-semibold' to="/create_account" onClick={userLogOut}><img className='w-6' src={LogOut} alt="" /></Link>:
                      <Link className='inline-block mx-3 text-base font-semibold' to="/create_account">Create Account</Link>
                    }
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header