import React from 'react'
import './Testimonials.css'
import { Data } from './TestimonialsData'


import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules

import {  Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          Data.map((data, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={data.avatar} alt=""/>
                </div>
                <h5 className='client__name'>{data.name}</h5>
                <small className="client__review">
                {data.review}
                </small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials