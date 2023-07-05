import React, { useEffect, useState } from 'react'
import Place from './Place'

const Places = () => {

  const [places,setPlaces]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/places`)
    .then((res)=>res.json())
    .then((data)=>setPlaces(data))
  },[])

  return (
    <div>
      <div className='pt-10 pb-20'>
          <div className='container'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                  {places.map((place)=><Place key={place.id} place={place}></Place>)}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Places