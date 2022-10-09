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
        <SlideContent slug='north-america' title='América do Norte' subtitle='' bgPosition="100% 50%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent slug='south-america' title='América do Sul' subtitle='' bgPosition="100% 85%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent slug='asia' title='Ásia' subtitle='' bgPosition="100% 50%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent slug='africa' title='África' subtitle='' bgPosition="100% 50%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent slug='europe'  title='Europa' subtitle='O continente mais antigo.' bgPosition="100% 50%" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent slug='oceania'  title='Oceania' subtitle='' bgPosition="100% 50%" />
      </SwiperSlide>
    </Swiper>
  )
}