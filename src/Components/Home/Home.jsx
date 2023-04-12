import React from 'react'
import Hero from './Hero'
import About from './About'
import Places from '../Place/Places'

const Home = () => {
  return (
    <div>
         <div>
            <Hero />
            <About />
            <h3 className='text-3xl font-semibold text-center'>Travel Place</h3>
            <Places />
         </div>
    </div>
  )
}

export default Home