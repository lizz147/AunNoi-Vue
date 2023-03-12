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
      ><img src="../../assets/carousel/s1.webp" alt="carousel-1" width="1600" height="900"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../assets/carousel/s2.webp" alt="carousel-2" width="1600" height="900"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../assets/carousel/s3.webp" alt="carousel-3" width="1600" height="900"
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
