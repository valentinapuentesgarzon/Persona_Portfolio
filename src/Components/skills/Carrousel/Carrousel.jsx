import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carrousel.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import HTML from '../../../assets/Skills/html.png'
import CSS from '../../../assets/Skills/css.png'
import JS from '../../../assets/Skills/js.png'
import FRAME from '../../../assets/Skills/react.png'
import Bootstrap from '../../../assets/Skills/bootstrap.png'
import Figma from '../../../assets/Skills/figma.png'
import XD from '../../../assets/Skills/adobe.png'
import git from '../../../assets/Skills/git.png'
import github from '../../../assets/Skills/git_hub.png'
import Node from '../../../assets/Skills/Node.png'


export default function Carrousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide id='skills'>
          <img src={HTML} />
        </SwiperSlide>  
        
        <SwiperSlide  id='skills'>
          <img src={CSS} />
        </SwiperSlide>
        <SwiperSlide  id='skills'>
          <img src={JS} />

        </SwiperSlide>
        <SwiperSlide  id='skills'>
          <img src={FRAME}/>
        </SwiperSlide>
        <SwiperSlide  id='skills'>
          <img src={Bootstrap}/>
        </SwiperSlide>
        <SwiperSlide  id='skills'>
          <img id ='figma'src={Figma} />
        </SwiperSlide>
        <SwiperSlide  id='skills'>
          <img src={XD} />
        </SwiperSlide>
        <SwiperSlide  id='skills'>
          <img src={git} />
        </SwiperSlide>
        <SwiperSlide  id='skills'>
          <img src={github} />
        </SwiperSlide>
        <SwiperSlide  id='skills'>
          <img src={Node} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}