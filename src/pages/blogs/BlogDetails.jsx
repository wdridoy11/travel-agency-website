import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BlogDetails = () => {
    const blogDetails = useLoaderData();
    const {image, title, description, _id}= blogDetails;
    console.log(blogDetails)
  return (
    <div className='py-20'>
        <div>
            <div className='container mx-auto px-5'>
                <div className='grid grid-cols-3 md:gap-5 lg:gap-10'>
                    <div className='col-span-2'>
                        <img className='w-full h-[60vh] object-cover] rounded-md' src={image} alt="" />
                        <div className='px-5'>
                            <h3 className='text-2xl font-medium my-5'>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails