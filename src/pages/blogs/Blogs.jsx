import React, { useEffect, useState } from 'react'
import Blog from './Blog'

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch(`blog.json`)
        .then((res)=>res.json())
        .then((data)=>setBlogs(data))
    },[])
console.log(blogs)
  return (
    <div className='pt-10 pb-20'>
        <div className='container mx-auto px-5'>
            <h3 className="text-3xl font-semibold text-center mb-16">Our Blog</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {blogs.map((blog)=><Blog key={blog.id} blog={blog}></Blog>)}
            </div>
        </div>
    </div>
  )
}

export default Blogs