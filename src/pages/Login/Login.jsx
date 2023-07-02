import React, { useContext, useState } from 'react'
import { FaEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import travelImage from '../../assets/travel.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../../components/Sheare/socialLogin/SocialLogin';
const bgImage =`https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg`

const Login = () => {

  const {loginUser} = useContext(AuthContext);
  // firebase login error print
  const [error,setError] = useState("");
  // password show and hide
  const [showPassword, setShowPassword] = useState(false);
  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  // handle login system
  const onSubmit = data => {
      loginUser(data.email, data.password)
      .then((res)=>{
        const user = res.user;
        navigate("/")
      })
      .catch((err)=>setError(err.message))
  };

  return (
    <div>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImage})`}}>
          <div className="hero-overlay bg-opacity-30"></div>
            <div className='container mx-auto px-5'>
                <div className='grid md:grid-cols-2 glass gap-10 py-20 px-10 rounded-xl items-center'>
                    <div>
                      <h1 className='text-2xl font-medium text-white text-center mb-5'>Welcome to Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <p className='text-red-600 text-center mb-2 text-lg '>{error}</p>
                          <div className='mb-3'>
                              <input 
                                  type="email" 
                                  name='email' 
                                  id='name' 
                                  {...register("email",{required: true})}
                                  placeholder="Enter your email" 
                                  className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white   rounded-full w-full" 
                              />
                              {errors.email?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Email field is required</p>}
                          </div>
                          <div>
                              <div className='relative'>
                                <input 
                                    type={showPassword ? "text":"password"} 
                                    name='password' 
                                    id='password' 
                                    {...register("password",{required: true})}
                                    placeholder="Enter your password"
                                    className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                                />
                                <button onClick={()=>setShowPassword(password=>!password)} className='absolute top-1/3 right-6 text-xl'>
                                    <FaEye></FaEye>
                                </button>
                              </div>
                              {errors.password?.type === 'required' && <p className='text-red-600 pl-3 mt-1' role="alert">Password field is required</p>}
                          </div>
                          <input 
                              className='py-2 block w-full px-10 rounded-full text-white mt-5 cursor-pointer text-base font-medium glass' 
                              type="submit" 
                              value="Login" 
                          />
                        </form>
                        <p className='text-base font-medium text-white text-center mt-4'>
                            New here? <Link className='text-slate-800' to={`/signup`}>Create a New Account</Link>
                        </p>
                        <div className="divider before:bg-white after:bg-white text-white">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
                    <div>
                        <img className='w-full md:w-9/12' src={travelImage} alt="login" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login