<template>
    <div
      class="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-2 p-3"
    >
      <div v-for="item in items" class="relative cursor-pointer">
        <img class="rounded-xl" src="../../../assets/sa-a.webp" alt="" />
        <div
          class="absolute w-full h-full opacity-0 hover:opacity-100 transition-all duration-500"
          style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
        >
          <div
            class="flex flex-col w-full h-[95%] justify-center items-center"
            style="background-color: rgba(0, 0, 0, 0.7)"
          >
            <div class="flex flex-row gap-1 bg-orange-300 px-3 py-2 rounded-lg transition-all hover:bg-orange-400 duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
              <span class="text-white">เข้าเล่น</span>
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
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20],
      };
    },
  };
  </script>
  