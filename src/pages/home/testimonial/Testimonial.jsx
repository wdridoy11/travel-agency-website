/* import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./app.css"

const travelPlace1=`https://wdridoy11.github.io/travel-website/images/tour-img01.jpg`;
const travelPlace2=`https://wdridoy11.github.io/travel-website/images/tour-img02.jpg`;
const travelPlace3=`https://wdridoy11.github.io/travel-website/images/tour-img03.jpg`;
const travelPlace4=`https://wdridoy11.github.io/travel-website/images/tour-img04.jpg`;
const travelPlace5=`https://wdridoy11.github.io/travel-website/images/tour-img05.jpg`;
const travelPlace6=`https://wdridoy11.github.io/travel-website/images/tour-img06.jpg`;
const travelPlace7=`https://wdridoy11.github.io/travel-website/images/tour-img07.jpg`;
const travelPlace8=`https://cdn.pixabay.com/photo/2017/02/18/08/49/island-2076832_960_720.jpg`;


const Testimonial = () => {
    const carousel = (slider) => {
        const z = 300
        function rotate() {
          const deg = 360 * slider.track.details.progress
          slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
        }
        slider.on("created", () => {
          const deg = 360 / slider.slides.length
          slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
          })
          rotate()
        })
        slider.on("detailsChanged", rotate)
      }

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      )
  return (
    <div>
        <div className="wrapper">
          <div className="scene">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell"><img src={travelPlace1} alt="" /></div>
              <div className="carousel__cell"><img src={travelPlace2} alt="" /></div>
              <div className="carousel__cell"><img src={travelPlace3} alt="" /></div>
              <div className="carousel__cell"><img src={travelPlace4} alt="" /></div>
              <div className="carousel__cell"><img src={travelPlace5} alt="" /></div>
              <div className="carousel__cell"><img src={travelPlace6} alt="" /></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonial */