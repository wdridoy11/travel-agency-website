import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation,faPhone,faEnvelope,faDollar,faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Contact from './Contact';

const PlaceDetail = (props) => {

    const {travel_place,description,location,reating,place_name,price,phone,email,total_reating}= props.detail;

  return (
    <div>
        <div>
            <img className='w-full h-[90vh] object-cover object-center' src={travel_place} alt="travel_place" /> 
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
                            <Link className='text-white bg-[#ff7e01] border-0 font-medium block text-center py-2 rounded-md hover:bg-black hover:text-white duration-500'>Booking </Link>
                        </div>
                        <div className='bg-[#F8F8FE] p-10 rounded-lg'>
                            <h3 className='text-black text-2xl mb-3 font-semibold'>Contact Info</h3>
                            <Contact></Contact>
                            {/* <div className='mb-2'>
                              <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faPhone} />
                              <span className="text-xl font-medium">{phone}</span>
                            </div>
                            <div className='mb-5'>
                              <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faEnvelope} />
                              <span className="text-xl font-medium">{email}</span>
                            </div>
                            <Link className='text-white bg-[#ff7e01] border-0 font-medium block text-center py-2 rounded-md hover:bg-black hover:text-white duration-500'>Contact Now</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceDetail