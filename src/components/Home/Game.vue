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
  <div class="px-4 lg:px-20 my-5">
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
        class="bg-indigo-900 w-fit flex flex-col items-center rounded-xl transition-all hover:bg-violet-900 duration-300 cursor-pointer"
      >
        <img
          :src="item.img"
          alt="game"
          class="rounded-xl rounded-b-none lg:w-[250px] lg:h-[140px]"
        />
        <p class="text-white py-0.5">{{ item.name }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>
