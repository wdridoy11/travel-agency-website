import React, { useEffect, useState } from 'react'
import LightGallery from 'lightgallery/react';
import './gallery.css';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css'
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
    const [travelGallery, setTravelGallery] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/travelGallery`)
        .then((res)=>res.json())
        .then((data)=>setTravelGallery(data))
        .catch((err)=>console.log(err.message))
    },[])
    // const onBeforeSlide = (detail) => {
    //     const { index, prevIndex } = detail;
    //     console.log(index, prevIndex);
    // };
    

  return (
    <div className='pb-10'>
        <div className='container mx-auto px-5'>
            <h3 className="text-3xl font-semibold text-center mb-10">Our Travel Gallery</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {travelGallery.slice(0,9).map((gallery)=><LightGallery 
                    plugins={[lgZoom]}
                    mode="lg-fade"
                 >
                    <a 
                        href={gallery.img}
                        key={gallery._id} 
                        className="gallery-item" 
                        data-iframe="true"
                        >
                        <img className='w-full h-64 object-cover img-responsive rounded-md' src={gallery.img} alt="Travel gallery" />
                    </a>
                </LightGallery>)}
            </div>
        </div>
    </div>
  )
}

export default Gallery