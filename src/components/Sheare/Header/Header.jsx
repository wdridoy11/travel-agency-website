import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import Container from '../container/Container';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const userLogOut=()=>{
    logOut()
    .then((res)=>{
      const user = res.user;
      console.log(user)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
  const navMenu=<>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link>Place</Link></li>
    {user ? <>
      <Link className='bg-[#ff7e01] px-10 py-2 flex items-center text-base font-medium text-white rounded-full hover:bg-black duration-500' onClick={userLogOut}>LogOut</Link>
      </>:<>
      <Link className='bg-[#ff7e01] px-10 py-2 flex items-center text-base font-medium text-white rounded-full hover:bg-black duration-500' to={'/login'}>Login</Link>
      </>
    }
  </>

  return (
    <div className='bg-transparent py-3 fixed z-10 bg-opacity-30 bg-base-100 w-full backdrop-blur-sm'>
    <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
            <div>
                <Link to={'/'}><img className='w-24' src={Logo} alt="logo" /></Link>
            </div>
            <div className='flex gap-6 items-center'>
                <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                <Link className='text-base font-medium text-black' to={`/about`}>About</Link>
                <Link className='text-base font-medium text-black' to={`/`}>Place</Link>
                <Link className='text-base font-medium text-black' to={`/`}>Blog</Link>
                <Link className='text-base font-medium text-black' to={`/`}>Contact</Link>
                 <div>
                    {user ? <div>
                      {/* <Link className='text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-full hover:bg-black duration-500 mr-2' to={'/my_booking'}>My Appointment</Link> */}
                      <Link className='text-base font-medium text-black mr-4' to={`/dashboard`}>Dashboard</Link>
                      <Link className='text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-full hover:bg-black duration-500' onClick={userLogOut}>Logout</Link>
                    </div>:
                      <Link className='text-base font-medium bg-[#40d0c6] text-white px-7 py-2 rounded-full hover:bg-black duration-500' to={`/login`}>Login</Link>
                    } 
                 </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header