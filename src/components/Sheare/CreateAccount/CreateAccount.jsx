import React, { useContext }  from 'react'
import { Link} from 'react-router-dom'
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
const googleIcon= `https://cdn-icons-png.flaticon.com/512/300/300221.png`;
const emailIcon=`https://cdn-icons-png.flaticon.com/512/732/732200.png`;
const githubIcon=`https://cdn-icons-png.flaticon.com/512/2111/2111432.png`;
const userIcon= `https://cdn-icons-png.flaticon.com/512/2609/2609282.png`;


const CreateAccount = () => {
  const {user,createAccountUsingGoogle,createAccountUsingGithub}=useContext(AuthContext)

  return (
    <div className='mt-20'>
        <div className='container mx-auto'>
            <div>
                <div className='bg-slate-200 py-4 mx-auto rounded-lg w-full md:w-1/3 mb-5'>
                    <Link className='flex items-center justify-center gap-3' onClick={createAccountUsingGoogle}>
                        <img className='w-10' src={googleIcon} alt="" />
                        <p className='text-base font-semibold text-slate-500'>Join With Google</p>
                    </Link>
                </div>
                <div className='bg-slate-200 py-4 mx-auto rounded-lg w-full md:w-1/3 mb-5'>
                    <Link className='flex items-center justify-center gap-3' onClick={createAccountUsingGithub}>
                        <img className='w-10' src={githubIcon} alt="" />
                        <p className='text-base font-semibold text-slate-500'>Join With Github</p>
                    </Link>
                </div>
                <div className='bg-slate-200 py-4 mx-auto rounded-lg w-full md:w-1/3 mb-5' >
                    <Link className='flex items-center justify-center gap-3' to={`/signup`}>
                        <img className='w-10' src={emailIcon} alt="" />
                        <p className='text-base font-semibold text-slate-500'>Join With Email</p>
                    </Link>
                </div>
                <div className='bg-slate-200 py-4 mx-auto rounded-lg w-full md:w-1/3 mb-5' >
                    <Link className='flex items-center justify-center gap-3' to={`/login`}>
                        <img className='w-10' src={userIcon} alt="" />
                        <p className='text-base font-semibold text-slate-500'>Login</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAccount;