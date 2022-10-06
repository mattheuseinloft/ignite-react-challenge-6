import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { Center, Text, Image, VStack } from '@chakra-ui/react'

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
        <Center 
          w="1240px"
          h="450px"
          bgGradient="linear(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/images/europe.jpg')"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="100% 50%"
          // Mover um pouco abaixo, não deve ficar 100% centralizado
        >
          <VStack spacing="16px">
            <Text color="#F5F8FA" fontSize="48px" fontWeight="bold">Europa</Text>
            <Text color="#F5F8FA" fontSize="24px" fontWeight="bold">O continente mais antigo.</Text>
          </VStack>
        </Center>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/europe.jpg" alt="europe" w="1240px" h="450px" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/europe.jpg" alt="europe" w="1240px" h="450px" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/europe.jpg" alt="europe" w="1240px" h="450px" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/europe.jpg" alt="europe" w="1240px" h="450px" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/europe.jpg" alt="europe" w="1240px" h="450px" />
      </SwiperSlide>
    </Swiper>
  )
}