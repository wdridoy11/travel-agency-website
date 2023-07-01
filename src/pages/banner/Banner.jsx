import React from 'react'



const Banner = (props) => {
    const {img,title}=props;
  return (
    <div>
        <div>
            <img className='w-full h-96 object-cover object-center' src={img} alt="" />
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Banner