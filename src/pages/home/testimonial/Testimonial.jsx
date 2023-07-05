import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../app.css';

// import required modules
// import { Pagination } from 'swiper/modules';

const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews`)
    .then((res)=>res.json())
    .then((data)=>setReview(data))
    .catch((err)=>console.log(err.message))
  },[])

  return (
    <div className='py-10'>
      <div className='container mx-auto px-5'>
          <h3 className="text-3xl font-semibold text-center">Testimonial</h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {review.map((review)=><SwiperSlide key={review.id}>
              <div className='text-center shadow-lg px-5 py-10 rounded-md my-10'>
                  <img className='w-20 h-20 object-cover rounded-full mx-auto' src={review.img} alt="" />
                  <h3 className='text-lg font-medium text-black my-2'>{review.name}</h3>
                  <p className='text-base text-slate-600 text-justify px-2'>{review.description}</p>
              </div>
            </SwiperSlide>)}
          </Swiper>
      </div>
    </div>
  );
}

export default Testimonial