import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { useForm } from 'react-hook-form'
import Payment from '../payment/Payment'
import Swal from 'sweetalert2'

const Booking = () => {
   const dataLoad = useLoaderData();
   const {user} = useContext(AuthContext);
   const {place_name,travel_place, location, price } = dataLoad;
   const { register, formState: { errors }, handleSubmit } = useForm();

   const onSubmit = (data) =>{
    fetch(`http://localhost:5000/booking`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data.insertedId){
            Swal.fire({
                title: "Congratulations!",
                text: "You are booking successful.",
                icon: "success"
              });
        }else{
            Swal.fire({
                title: "Sorry",
                text: "You are booking not successful.",
                icon: "error"
              });
        }
    })
    .catch((error)=>console.log(error.message))
   };

  return (
    <div className='py-20'>
        <div className='container mx-auto px-5'>
            <h3 className='text-slate-9000 text-3xl mb-10 font-semibold text-center'>Welcome to booking page</h3>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>
                <div className='col-span-3'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className='mb-4'>
                                <label htmlFor="fname" className='text-base font-normal text-slate-600 mb-1 block'>Your Name</label>
                                <input 
                                    type="text" 
                                    name='fname' 
                                    id='fname' 
                                    placeholder="First Name" 
                                    {...register("fname",{ required: true })}
                                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                />
                                {errors.fname?.type === "required" && (<p role="alert" className='text-red-500'>First name is required</p>)}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="lname" className='text-base font-normal text-slate-600 mb-1 block'>Your Name</label>
                                <input 
                                    type="text" 
                                    name='lname' 
                                    id='lname' 
                                    placeholder="Last Name" 
                                    {...register("lname",{ required: true })}
                                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                />
                                {errors.lname?.type === "required" && (<p role="alert" className='text-red-500'>Last name is required</p>)}
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className='mb-4'>
                                <label htmlFor="email" className='text-base font-normal text-slate-600 mb-1 block'>Your Email</label>
                                <input 
                                    type="email" 
                                    name='email' 
                                    id='email' 
                                    placeholder="Your Email" 
                                    {...register("email")}
                                    value={user?.email}
                                    className="px-5 py-3 outline-none bg-slate-300 placeholder-slate-600 border border-slate-300 rounded-md w-full cursor-not-allowed"
                                    readOnly
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="person" className='text-base font-normal text-slate-600 mb-1 block'>Person</label>
                                <input 
                                    type="number" 
                                    name='person' 
                                    id='person' 
                                    placeholder="Person" 
                                    defaultValue="1"
                                    min="1"
                                    {...register("person",{ required: true })}
                                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                />
                                {errors.person?.type === "required" && (<p role="alert" className='text-red-500'>Person is required</p>)}
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className='mb-4'>
                                <label htmlFor="phone" className='text-base font-normal text-slate-600 mb-1 block'>Your Phone</label>
                                <input 
                                    type="tel" 
                                    name='phone' 
                                    id='phone' 
                                    placeholder="Your Phone" 
                                    {...register("phone",{ required: true })}
                                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                />
                                {errors.phone?.type === "required" && (<p role="alert" className='text-red-500'>Number is required</p>)}
                            </div>
                            <div>
                                <label className='text-base font-normal text-slate-600 mb-1 block'>choose date</label>
                                <select className="select w-full border border-slate-300">
                                    <option disabled selected>Date</option>
                                    <option>05/07/2023--10/07/2023</option>
                                    <option>15/07/2023--20/07/2023</option>
                                    <option>25/07/2023--30/07/2023</option>
                                    <option>05/08/2023--10/08/2023</option>
                                    <option>15/08/2023--20/08/2023</option>
                                    <option>25/08/2023--30/08/2023</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div className='mb-4'>
                                <label htmlFor="city" className='text-base font-normal text-slate-600 mb-1 block'>Your City</label>
                                <input 
                                    type="text" 
                                    name='city' 
                                    id='city' 
                                    placeholder="Your City" 
                                    {...register("city",{ required: true })}
                                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                />
                                {errors.city?.type === "required" && (<p role="alert" className='text-red-500'>City name is required</p>)}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="state" className='text-base font-normal text-slate-600 mb-1 block'>State/Province/Region</label>
                                <input 
                                    type="text" 
                                    name='state' 
                                    id='state' 
                                    placeholder="State/Province/Region" 
                                    {...register("state",{ required: true })}
                                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                    required 
                                />
                                {errors.state?.type === "required" && (<p role="alert" className='text-red-500'>State name is required</p>)}
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-3 mb-5'>
                            <div className='mb-4'>
                                <label htmlFor="postal" className='text-base font-normal text-slate-600 mb-1 block'>ZIP code/Postal code</label>
                                <input 
                                    type="text" 
                                    name='postal' 
                                    id='postal' 
                                    placeholder="ZIP code/Postal code" 
                                    {...register("postal",{ required: true })}
                                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                />
                                {errors.postal?.type === "required" && (<p role="alert" className='text-red-500'>ZIP code is required</p>)}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="address" className='text-base font-normal text-slate-600 mb-1 block'>Your Address</label>
                                <input 
                                    type="text" 
                                    name='address' 
                                    id='address' 
                                    placeholder="Enter your Address" 
                                    {...register("address",{ required: true })}
                                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                    required 
                                />
                                {errors.address?.type === "required" && (<p role="alert" className='text-red-500'>Address is required</p>)}
                            </div>
                            <div>
                                {/* <Payment></Payment> */}
                            </div>
                        </div>
                        <input 
                            type="submit" 
                            className='text-white w-full cursor-pointer bg-[#ff7e01] border-0 font-medium text-center py-3 rounded-md hover:bg-black hover:text-white duration-500' 
                            value="Booking"
                        />
                    </form>
                </div>
                <div className='col-span-2 shadow-md p-7 rounded-md border border-slate-200'>
                    <div className='flex gap-5'>
                        <div>
                            <img className='rounded-md' width="100" src={travel_place} alt="" />
                        </div>
                        <div>
                            <h4 className='text-lg font-medium text-black'>{place_name}</h4>
                            <div className='mt-1'>
                              <FontAwesomeIcon className='text-slate-600 mr-2' icon={faLocation} />
                              <span className="text-base text-slate-600 font-medium">{location}</span>
                            </div>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <div className=' flex justify-between'>
                            <p className="text-lg text-slate-600 font-medium">Price per person</p>
                            <p className="text-lg text-slate-600 font-medium">${price}</p>
                        </div>
                        <div className=' flex justify-between'>
                            <p className="text-lg text-slate-600 font-medium">Location</p>
                            <p className="text-lg text-slate-600 font-medium">{location}</p>
                        </div>
                        <div className=' flex justify-between'>
                            <p className="text-lg text-slate-600 font-medium">Duration</p>
                            <p className="text-lg text-slate-600 font-medium">5 Day</p>
                        </div>
                        <div className='flex gap-2 my-5'>
                            <input 
                                type="text" 
                                name='coupon' 
                                id='coupon' 
                                placeholder="Coupon code" 
                                className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                                required 
                            />
                            <button className='text-white cursor-pointer bg-[#ff7e01] border-0 font-medium text-center px-10 py-3 rounded-md hover:bg-black hover:text-white duration-500'>Apply</button>
                        </div>
                        <div className=' flex justify-between'>
                            <p className="text-lg text-slate-600 font-medium">Price</p>
                            <p className="text-lg text-slate-600 font-medium">$100</p>
                        </div>
                        <div className='divider'></div>
                        <div className=' flex justify-between'>
                            <p className="text-xl text-slate-600 font-semibold">Pay Amount</p>
                            <p className="text-xl text-slate-600 font-semibold">$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking