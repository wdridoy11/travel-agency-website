import React from 'react'
const image=`https://www.travelandleisure.com/thmb/wsA6EXFuYkqtuJGLbQWw05-cwPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-como-MOSTBEAUTIFUL0921-cb08f3beff1041e4beefc67b5e956b23.jpg`;



const Hero = () => {
  return (
    <div>
        <div className='relative'>
            <img className='w-full h-[900px] object-cover object-center' src={image} alt="" />
            <div className='absolute top-1/3 w-full text-center'>
                <h1 className='text-6xl font-semibold leading-tight text-white'>Lifelong memories just a <br></br> few seconds away</h1>
                <p className='text-xl font-medium text-white mt-2'>Let’s start your journey with us, your dream will come true</p>
                <button className="bg-[#ff7e01] text-white text-xl mx-auto rounded-lg inline-block px-10 mt-7 py-3 hover:bg-black transition duration-150">Featured</button>
            </div>
        </div>
    </div>
  )
}

export default Hero