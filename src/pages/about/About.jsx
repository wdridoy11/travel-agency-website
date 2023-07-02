import React from 'react'
const aboutImage=`https://modrent.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png`

const About = () => {
  return (
    <div className='my-20'>
        <div className='container'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div>
                    <img className='w-full h-96 object-cover rounded-md' src={aboutImage} alt="" />
                </div>
                <div>
                    <h3 className='text-3xl font-semibold '>About Us</h3>
                    <p className='mt-7 text-base font-normal leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, mollitia repellat deserunt delectus minus sunt pariatur nisi ex architecto quo itaque ea excepturi nam ut unde voluptates officiis repudiandae alias quod possimus odit neque illum voluptate deleniti. Laudantium, quia rerum! Accusantium maxime consequuntur similique, optio in eaque aperiam totam. Accusamus animi fugiat placeat quasi quod cum fuga voluptatum, vel explicabo nobis! Hic iure placeat ducimus adipisci molestiae corporis quasi mollitia commodi libero esse quia animi fugiat, a atque, vel deserunt.</p>
                    <button className="bg-[#ff7e01] text-white text-xl mx-auto rounded-lg inline-block px-10 mt-7 py-3 hover:bg-black transition duration-150">Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About