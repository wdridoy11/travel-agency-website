import React from 'react'
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
  const {image, title, description, _id}= blog;
  return (
    <div>
        <div className='shadow-md'>
            <img className='w-full h-[250px] object-cover object-top rounded-t-md' src={image} alt="blog" />
            <div className='p-4 rounded-b-md'>
                <h3 className='text-xl font-semibold text-black mb-3'>{title}</h3>
                <p className='text-base font-normal text-slate-700'>{description.length>70?<>{description.slice(0,70)}...</>:<>{description}</>}</p>
                <Link className='text-white cursor-pointer inline-block bg-[#ff7e01] border-0 font-medium text-center px-7 mt-4 py-2 rounded-md hover:bg-black hover:text-white duration-500' to={`/blog/${_id}`}>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Blog