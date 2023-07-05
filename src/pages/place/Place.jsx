import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation,faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Place = (props) => {
  const {_id,travel_place,location,place_name,reating,total_reating}=props.place;
  return (
    <div>
      <div>
        <div className="shadow-lg rounded-b-lg">
          <div className="relative">
             <img src={travel_place} alt="Travel Place" />
             <button className="absolute bottom-0 right-0 bg-[#ff7e01] text-white px-4 py-1 
             hover:bg-black transition duration-150">Featured</button>
          </div>
          <div className="p-4">
             <div className="flex justify-between">
                <p>
                  <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faLocation} />
                  <span className="text-base font-medium">{location}</span>
                </p>
                <p>
                  <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faStar} />
                  <span className="text-base font-medium">{reating} ({total_reating})</span>
                </p>
             </div>
             <h3 className="text-black text-lg xl:text-xl my-3 font-semibold">{place_name}</h3>
             <div className="flex justify-between">
                <p className="text-[#faa935] text-xl font-semibold">
                  <span>$100/</span>
                  <sub className="text-black font-medium">Per Person</sub>
                </p>
                <Link className="bg-[#faa935] text-white px-4 py-1 rounded-lg hover:bg-black transition duration-150" to={`/place/${_id}`}>View Details</Link>
             </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Place