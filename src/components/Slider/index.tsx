import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import { SlideContent } from './SlideContent';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <SlideContent imageUrl='/images/north-america.jpg' title='América do Norte' subtitle='' bgPosition="100% 50%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent imageUrl='/images/south-america.jpg' title='América do Sul' subtitle='' bgPosition="100% 85%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent imageUrl='/images/asia.jpg' title='Ásia' subtitle='' bgPosition="100% 50%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent imageUrl='/images/africa.jpg' title='África' subtitle='' bgPosition="100% 50%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent imageUrl='/images/europe.jpg' title='Europa' subtitle='O continente mais antigo.' bgPosition="100% 50%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent imageUrl='/images/oceania.jpg' title='Oceania' subtitle='' bgPosition="100% 50%" />
      </SwiperSlide>
    </Swiper>
  )
}