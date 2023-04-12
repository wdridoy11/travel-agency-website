import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation,faStar } from '@fortawesome/free-solid-svg-icons'

const Place = (props) => {
  const {id,travel_place,location,place_name,reating,total_reating}=props.place;
  
  return (
    <div>
      <div>
          <div class="shadow-lg rounded-b-lg">
          <div class="relative">
             <img src={travel_place} alt="Travel Place" />
             <button class="absolute bottom-0 right-0 bg-[#ff7e01] text-white px-4 py-1 
             hover:bg-black transition duration-150">Featured</button>
          </div>
          <div class="p-4">
             <div class="flex justify-between">
                <p>
                   <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faLocation} />
                   <span class="text-base font-medium">{location}</span>
                </p>
                <p>
                    <FontAwesomeIcon className='text-[#faa935] mr-2' icon={faStar} />
                   <span class="text-base font-medium">{reating} ({total_reating})</span>
                </p>
             </div>
             <h3 class="text-black text-lg xl:text-xl my-3 font-semibold">{place_name}</h3>
             <div class="flex justify-between">
                <p class="text-[#faa935] text-xl font-semibold">
                   <span>$100/</span>
                   <sub class="text-black font-medium">Per Person</sub>
                </p>
                <button class="bg-[#faa935] text-white px-4 py-1 rounded-lg 
                hover:bg-black transition duration-150">View Details</button>
             </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Place