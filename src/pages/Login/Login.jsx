import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider'

const Login = () => {
  const {signIn,resetPassword}=useContext(AuthContext);
  const emailRef=useRef();
  const handleSignIn=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then((result)=>{
      const user = result.user;
      console.log(user)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  const handleResetPassword=()=>{
    const email=emailRef.current.value;
    if(!email){
      alert("Please enter your email and reset your password");
    }
    resetPassword(email)
    .then(()=>{
      alert("Please check your email");
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  return (
      <div>
        <div className='container mx-auto'>
            <div className='mt-32'>
                <div className='w-full md:w-1/2 mx-auto shadow-lg px-14 pt-14 pb-10 rounded-lg'>
                    <form onSubmit={handleSignIn}>
                        <input ref={emailRef} className='w-full border px-5 py-3 mb-3' type="email" name="email" id="email" placeholder='Enter your email' required/>
                        <input className='w-full border px-5 py-3 mb-1' type="password" name="password" id="password" placeholder='Enter your password' required/>
                        <p><Link className='text-sm font-normal text-blue-500' onClick={handleResetPassword}>Forgot password?</Link></p>
                        <button className='btn px-10 bg-slate-300 text-black mt-3 border-0 hover:bg-black hover:text-white duration-500'>Submit</button>
                    </form>
                    <p className='text-base font-medium mt-5'>Register Now!? <Link className='text-blue-600' to={'/signup'}>Register</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login