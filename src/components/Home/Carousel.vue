<template>
  <swiper
    :navigation="true"
    :modules="modules"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    class="mySwiper"
    style="user-select: none"
  >
    <swiper-slide
      ><img src="../../assets/carousel/s1.png" alt="carousel-1"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../assets/carousel/s2.png" alt="carousel-2"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../assets/carousel/s3.png" alt="carousel-3"
    /></swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>
