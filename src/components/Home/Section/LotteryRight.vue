<script setup>
import thaiImg from "../../../assets/lotto/thai.png";
</script>
<template>
  <div class="w-full flex flex-col items-center py-4 lg:py-10">
    <div
      class="flex flex-row justify-between lg:justify-center w-full gap-2 md:gap-5 lg:gap-10"
    >
      <div class="flex flex-col items-center group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="group-hover:stroke-blue-600 transition-all duration-200 cursor-pointer w-20 md:w-28 lg:w-36"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>

        <h6
          class="group-hover:text-blue-600 transition-all duration-200 cursor-pointer text-center text-xs md:text-base w-full mb-1"
        >
          กลุ่มเลขเด็ด
        </h6>
        <p
          class="group-hover:text-blue-600 transition-all duration-200 cursor-pointer text-center text-xs md:text-base"
        >
          เลขเด็ดเลขดังประจำวัน
        </p>
      </div>
      <div class="flex flex-col items-center group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="group-hover:stroke-blue-600 transition-all duration-200 cursor-pointer w-20 md:w-28 lg:w-36"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
          />
        </svg>

        <h6
          class="group-hover:text-blue-600 transition-all duration-200 cursor-pointer text-center text-xs md:text-base w-full mb-1"
        >
          วิธีสมัครสมาชิก
        </h6>
        <p
          class="group-hover:text-blue-600 transition-all duration-200 cursor-pointer text-center text-xs md:text-base"
        >
          ขั้นตอนการสมัครสมาชิก
        </p>
      </div>
      <div class="flex flex-col items-center group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="group-hover:stroke-blue-600 transition-all duration-200 cursor-pointer w-20 md:w-28 lg:w-36"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <h6
          class="group-hover:text-blue-600 transition-all duration-200 cursor-pointer text-center text-xs md:text-base w-full mb-1"
        >
          สมัครสมาชิกผ่านแอดมิน
        </h6>
        <p
          class="group-hover:text-blue-600 transition-all duration-200 cursor-pointer text-center text-xs md:text-base"
        >
          ให้แอดมินช่วยสมัครสมาชิก
        </p>
      </div>
    </div>

    <div class="mt-6 w-full px-4">
      <h2
        class="text-center hover:text-blue-600 transition-all duration-200 cursor-pointer"
      >
        TOP LOTTO
      </h2>
      <p class="text-center text-lg mb-3 text-red-500 font-semibold">
        หวยเด่นยอดนิยม
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        <div
          class="flex flex-col items-center bg-red-500 hover:bg-red-600 transiton-all duration-200 cursor-pointer rounded-xl relative"
          v-for="item in items"
        >
          <img
            class="rounded-xl rounded-b-none h-72 md:h-60"
            :src="item.image"
            alt="thai"
          />
          <p class="py-1 text-white">{{ item.name }}</p>

          <div
            class="absolute bottom-12 bg-slate-200 w-11/12 rounded-xl flex flex-col items-center py-2"
          >
            <p class="text-xs mb-1">งวดวันที่ 09/01/66 เหลือเวลา</p>
            <div class="flex flex-row items-center text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-green-500 font-bold">14:31:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "หวยรัฐบาลไทย", image: thaiImg },
        { name: "หวยรัฐบาลไทย", image: thaiImg },
        { name: "หวยรัฐบาลไทย", image: thaiImg },
        { name: "หวยรัฐบาลไทย", image: thaiImg },
        { name: "หวยรัฐบาลไทย", image: thaiImg },
        { name: "หวยรัฐบาลไทย", image: thaiImg },
      ],
    };
  },
};
</script>
