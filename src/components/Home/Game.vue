<script>
import jokergame from "../../assets/game/new-pmt.gif";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper";
export default {
  data() {
    return {
      items: [
        {
          name: "Joker Gaming",
          img: jokergame,
        },
        {
          name: "Joker Gaming",
          img: jokergame,
        },
        {
          name: "Joker Gaming",
          img: jokergame,
        },
        {
          name: "Joker Gaming",
          img: jokergame,
        },
        {
          name: "Joker Gaming",
          img: jokergame,
        },
        {
          name: "Joker Gaming",
          img: jokergame,
        },
        {
          name: "Joker Gaming",
          img: jokergame,
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
<template>
  <div class="px-5 my-3">
    <swiper
      :slidesPerView="2"
      :spaceBetween="5"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :breakpoints="{
        '640': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        '1280': {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        '1536': {
          slidesPerView: 7,
          spaceBetween: 10,
        },
      }"
      class="mySwiper"
    >
      <swiper-slide
        v-for="item in items"
        class="bg-indigo-800 w-fit flex flex-col items-center rounded-xl"
      >
        <img
          :src="item.img"
          alt="game"
          width="250"
          height="300"
          class="rounded-xl rounded-b-none"
        />
        <p class="text-white py-0.5">{{item.name}}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>
