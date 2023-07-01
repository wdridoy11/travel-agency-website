import React from 'react'
import LightGallery from 'lightgallery/react';
const Gallery = () => {

    const onBeforeSlide = (detail) => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

  return (
    <div>
        <LightGallery elementClassNames="custom-wrapper-class" onBeforeSlide={onBeforeSlide} >
            <a href="img/img1.jpg">
                <img alt="img1" src="img/thumb1.jpg" />
            </a>
        </LightGallery>
    </div>
  )
}

export default Gallery