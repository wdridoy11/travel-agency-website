import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";

const Signup = () => {
const {user,createAccountUsingEmail,userEmailVerification}=useContext(AuthContext);

const handleSignUp=(event)=>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  createAccountUsingEmail(email,password)
  .then((result)=>{
    const user = result.user;
    userEmailVerification(user)
  })
  .catch((error)=>{
    console.log(error.message)
  })
}

  return (
    <div >
        <div className='container mx-auto'>
            <div className='mt-32'>
                <div className='w-full md:w-1/2 mx-auto shadow-lg px-14 pt-14 pb-10 rounded-lg'>
                    <form onSubmit={handleSignUp}>
                        <input className='w-full border px-5 py-3 mb-3' type="text" name='name' placeholder='Enter your name'  required/>
                        <input className='w-full border px-5 py-3 mb-3' type="email" name="email" id="email" placeholder='Enter your email' required/>
                        <input className='w-full border px-5 py-3 mb-1' type="password" name="password" id="password" placeholder='Enter your password' required/>
                        <button className='btn px-10 mt-7 bg-slate-300 text-black border-0 hover:bg-black hover:text-white duration-500'>Submit</button>
                    </form>
                    <p className='text-base font-medium mt-5'>Already registered ? <Link className='text-blue-600' to={'/login'}>Sign In</Link></p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Signup;
