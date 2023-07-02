
import React from "react";
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { FaArrowRight } from 'react-icons/fa';
// import css form swiper
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';
// import image
 import travelPlace1 from '../../../assets/Rectangle-1.jpg'
 import travelPlace2 from '../../../assets/Rectangle-2.png'
 import travelPlace3 from '../../../assets/Rectangle-3.png'
 import travelPlace4 from '../../../assets/Rectangle-4.png'
 const travelPlace5 =`https://cdn.pixabay.com/photo/2019/07/21/16/29/paris-4353082_960_720.jpg`
 const travelPlace6 =`https://cdn.pixabay.com/photo/2017/02/18/08/49/island-2076832_960_720.jpg`
 const travelPlace7 =`https://cdn.pixabay.com/photo/2017/12/28/02/25/saint-mary-lake-3044265_960_720.jpg`
const bgHero=`https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg`
const Hero = () => {

  return (
      <div className='hero-area' style={{backgroundImage:`url(${bgHero})`}}>
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-10 py-40'>
                <div className='col-span-1'>
                    <h1 className='text-white text-5xl font-bold mb-3'>Cox's bazar</h1>
                    <p className='text-white text-base font-normal mb-4'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className=' text-white bg-[#ff7e01] border-0 font-medium px-8 py-3 rounded-md hover:bg-black hover:text-white duration-500'>Booking <FaArrowRight className="inline-block ml-1"></FaArrowRight></button>
                </div>
                <div className="col-span-2 hero-slider">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace1} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace2} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace3} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace4} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace5} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace6} alt="" /></SwiperSlide>
                      <SwiperSlide><img className="h-[500px] w-full object-cover rounded-xl" src={travelPlace7} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
      </div> 
  )
}

export default Hero