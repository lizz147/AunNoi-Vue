<template>
  <div class="w-full sticky bottom-0 flex flex-row justify-center mt-5">
    <div
      class="w-11/12 md:w-3/4 flex flex-row justify-between lg:justify-around rounded-t-2xl px-1 py-2 relative h-auto"
    >
      <router-link
        class="text-gray-600 no-underline hover:text-blue-500 transition-all duration-200 flex flex-col justify-end items-center w-full z-10 hover:scale-105"
        to="/"
      >
        <img
          class="w-10 md:w-12"
          src="../../assets/icon/ฝากถอน.png"
          alt="image"
        />
        <span class="text-xs">หน้าแรก</span>
      </router-link>
      <router-link
        class="text-gray-600 no-underline hover:text-blue-500 transition-all duration-200 flex flex-col justify-end items-center w-full z-10 hover:scale-105"
        to="#"
      >
        <img
          class="w-10 md:w-12"
          src="../../assets/icon/ฝากถอน.png"
          alt="image"
        />
        <span class="text-xs">ฝากถอน</span>
      </router-link>
      <router-link
        class="text-gray-600 no-underline hover:text-blue-500 transition-all duration-200 flex flex-col justify-end items-center w-full rounded-full z-10 hover:scale-105"
        to="#"
      >
        <img
          class="w-24 h-[65px] md:h-[70px] lg:h-[80px]"
          src="../../assets/icon/ฝากถอน.png"
          alt="image"
        />
        <span class="text-xs">ฝากถอน</span>
      </router-link>
      <router-link
        class="text-gray-600 no-underline hover:text-blue-500 transition-all duration-200 flex flex-col justify-end items-center w-full z-10 hover:scale-105"
        to="/raffle"
      >
        <img
          class="w-10 md:w-12"
          src="../../assets/icon/ฝากถอน.png"
          alt="image"
        />
        <span class="text-xs">โพยหวย</span>
      </router-link>
      <router-link
        class="text-gray-600 no-underline hover:text-blue-500 transition-all duration-200 flex flex-col justify-end items-center w-full z-10 hover:scale-105"
        to="/victory"
      >
        <img
          class="w-10 md:w-12"
          src="../../assets/icon/ฝากถอน.png"
          alt="image"
        />
        <span class="text-xs">ผลหวย</span>
      </router-link>
      <div
        id="background"
        class="absolute bg-white w-full h-[40px] lg:h-[45px] z-0 bottom-0 rounded-t-2xl border border-gray-400"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5],
    };
  },
  methods: {},
};
</script>
