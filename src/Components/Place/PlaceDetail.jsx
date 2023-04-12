import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation,faStar,faPhone,faEnvelope,faDollar} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const PlaceDetail = (props) => {
    const {id,travel_place,description,location,place_name,reating,price,total_reating,phone,email}=props.detail;

  return (
    <div>
        <div>
          <img className='w-full h-[800px] object-cover object-center' src={travel_place} alt="" />
            <div className='container'>
                <div className='my-10 grid grid-cols-3 gap-10'>
                    <div className='col-span-2'>
                        <h3 className="text-black text-3xl my-3 font-semibold">{place_name}</h3>
                        <p>{description}</p>
                    </div>
                    <div className='bg-[#F8F8FE] p-10 rounded-lg'>
                        <div className='mb-10'>
                            <FontAwesomeIcon className='text-[#faa935] mr-2 text-2xl' icon={faDollar} />
                            <span className="text-[#ff7e01] text-2xl font-semibold">{price} (Per Person)</span>
                        </div>
                        <h3 className='text-black text-2xl mb-3 font-semibold'>Contact Info</h3>
                        <div className='mb-2'>
                          <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faLocation} />
                          <span className="text-xl font-medium">{location}</span>
                        </div>
                        <div className='mb-2'>
                          <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faPhone} />
                          <span className="text-xl font-medium">{phone}</span>
                        </div>
                        <div className='mb-2'>
                          <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faEnvelope} />
                          <span className="text-xl font-medium">{email}</span>
                        </div>
                        <Link className="bg-[#faa935] text-white px-5 py-2 rounded-lg mt-5 inline-block hover:bg-black transition duration-150">Contact Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceDetail