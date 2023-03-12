<script setup>
import UserStatus from "./StickyHeader/UserStatus.vue";
import Contect from "./StickyHeader/Contect.vue";
</script>
<template>
  <div
    id="Header"
    class="sticky w-full flex flex-row justify-around items-center top-0 py-2  z-40"
  >
    <router-link to="/">
      <img src="../../assets/small/logo.webp" class="w-32 lg:w-52" />
    </router-link>
    <div class="flex flex-row items-center gap-1">
      <UserStatus />
      <Contect @click="toggleisshow" />
    </div>
  </div>

  <div
    v-show="isShow"
    class="w-full h-screen fixed z-50 top-0 flex flex-col justify-center items-center fade"
    style="background-color: rgba(0, 0, 0, 0.7);"
  >
    <div
      class="w-11/12 h-fit md:w-6/12 bg-white rounded-md flex flex-col"
    >
      <div
        class="bg-white w-full h-fit flex flex-row justify-between p-2 px-3 py-3 border-b-2 border-blue-900 rounded-t-md"
      >
        <span class="text-base md:text-lg">เลือกช่องทางติดต่อเรา</span>
        <svg
          @click="toggleisshow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer transition-all duration-300 hover:text-blue-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="w-full h-full p-5 flex flex-col gap-3">
        <router-link
          to="#"
          class="flex flex-row items-center border-2 border-emerald-600 rounded-lg py-2 justify-center gap-1 hover:bg-emerald-600 transition-all duration-200 cursor-pointer group no-underline"
        >
          <img
            class="w-7"
            src="../../assets/small/line.webp"
            alt="LINE"
          />
          <span class="text-green-700 group-hover:text-white"
            >ติดต่อผ่านไลท์</span
          >
        </router-link>
        <router-link
          to="#"
          class="flex flex-row items-center border-2 border-red-600 rounded-lg py-2 justify-center gap-1 hover:bg-red-600 transition-all duration-200 cursor-pointer group no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="stroke-red-500 w-7 group-hover:stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span class="text-red-700 group-hover:text-white"
            >แชทสดกับพนักงาน</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleisshow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
