import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faDollar, faStar} from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel';
import Contact from './Contact';



const PlaceDetail = () => {
    const placeLoadData = useLoaderData();
    const {user} = useContext(AuthContext);
    const {travel_place, description, location, reating, place_name, price, total_reating, _id}= placeLoadData;



  return (
    <div>
        <div className='pt-32'>
            {/* <img className='w-full h-[90vh] object-cover object-center' src={travel_place} alt="travel_place" />  */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-10'>
                <div className='-mt-6'>
                    <Carousel>
                        <div className='place-img-slider'>
                            <img className='w-full rounded-md object-cover' src={travel_place} alt="travel_place" />
                        </div>
                    </Carousel>
                </div>
                <div className='grid md:grid-cols-1 gap-5'>
                    <img className='w-full rounded-md lg:h-[300px] object-cover' src={travel_place} alt="travel_place" />
                    <img className='w-full rounded-md lg:h-[300px] object-cover' src={travel_place} alt="travel_place" />
                </div>
                <div className='relative'>
                    <img className='w-full rounded-md lg:h-[630px] object-cover' src={travel_place} alt="travel_place" />
                    <button className='absolute bottom-5 right-5 text-white cursor-pointer inline-block bg-[#ff7e01] border-0 font-medium text-center 
                    px-7 mt-4 py-2 rounded-md hover:bg-black hover:text-white duration-500'>Show All</button>
                </div>
            </div>
            <div className='container'>
                <div className='my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='col-span-1 md:col-span-2'>
                        <h3 className="text-black text-3xl my-3 font-semibold">{place_name}</h3>
                        <p>{description}</p>
                    </div>
                    <div>
                        <div className='bg-[#F8F8FE] p-10 rounded-lg mb-5'>
                            <div className='mb-5'>
                                <FontAwesomeIcon className='text-[#faa935] mr-2 text-2xl' icon={faDollar} />
                                <span className="text-[#ff7e01] text-2xl font-semibold">{price} (Per Person)</span>
                            </div>
                            <div className='mb-2'>
                              <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faLocation} />
                              <span className="text-xl font-medium">{location}</span>
                            </div>
                            <div className='mb-5'>
                              <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faStar} />
                              <span className="text-xl font-medium">{reating} ({total_reating})</span>
                            </div>
                            {/* <Link className='text-white bg-[#ff7e01] border-0 font-medium block text-center py-2 rounded-md hover:bg-black hover:text-white duration-500' to={`booking/${_id}`}>Booking</Link> */}
                            <Link className='text-white bg-[#ff7e01] border-0 font-medium block text-center py-2 rounded-md hover:bg-black hover:text-white duration-500' to={user ? `/booking/${_id}`:"/login"}>Booking</Link>
                            {/* <Link className='text-white bg-[#ff7e01] border-0 font-medium block text-center py-2 rounded-md hover:bg-black hover:text-white duration-500' to={user ? `/booking/${_id}`:"/login"}>Booking</Link> */}
                        </div>
                        <div className='bg-[#F8F8FE] p-10 rounded-lg'>
                            <h3 className='text-black text-2xl mb-3 font-semibold'>Contact Now!</h3>
                            <Contact></Contact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceDetail