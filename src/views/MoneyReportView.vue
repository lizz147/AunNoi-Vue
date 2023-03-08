<script setup>
import NewStickyBottom from "../components/User/NewStickyBottom.vue";
import NewStickyHeader from "../components/User/NewStickyHeader.vue";
</script>

<template>
  <div class="min-h-screen" id="userMain">
    <NewStickyHeader />
    <div
      id="layout"
      class="w-full md:w-3/4 bg-white shadow-lg mx-auto mt-2 flex flex-col p-2 min-h-screen rounded-md"
    >
      <router-link
        to="/user"
        class="text-blue-500 no-underline hover:text-blue-700 transition-all duration-200 flex flex-row gap-1 mt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        หน้าแรก
      </router-link>

      <div class="flex flex-col mt-3">
        <div class="w-full flex flex-row gap-2 mb-3">
          <button
            class="py-3 bg-yellow-400 rounded-md px-1 w-full flex flex-col md:flex-row items-center justify-center gap-2 transiton-all hover:bg-yellow-500 duration-300"
            @click="toggleisNowStateTrue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
            <span class="text-white">รายการแจ้งฝาก / ถอน</span>
          </button>

          <button
            class="py-3 bg-violet-500 rounded-md px-1 w-full flex flex-col md:flex-row items-center justify-center gap-2 transiton-all hover:bg-violet-600 duration-300"
            @click="toggleisNowStateFalse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 fill-white stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>

            <span class="text-white">รายงานการเงิน</span>
          </button>
        </div>
        <div
          class="w-full border bg-slate-100 border-red-700 rounded-md flex flex-row justify-center py-2 items-center transition-all duration-300 hover:bg-red-500 cursor-pointer group"
          @click="toggleisshow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 lg:w-10 mr-1 stroke-2 stroke-red-700 group-hover:fill-red-500 transition-all duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          <span
            class="text-base lg:text-lg text-red-700 font-medium group-hover:text-red-800 transition-all duration-200"
            >แจ้งปัญหาฝาก / ถอน</span
          >
        </div>
        <div class="flex flex-col mt-5" v-show="isNowState">
          <div class="bg-slate-200 shadow py-2 px-2 pt-3 rounded-md mb-3">
            <div class="flex flex-row items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>

              <span class="font-semibold"> สถานะ {{ message }} </span>
            </div>
          </div>
          <div class="w-full grid grid-cols-3">
            <div
              class="bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all duration-300 flex flex-row justify-center items-center text-white rounded-tl-lg rounded-bl-lg py-2"
              @click="changeMessage1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <span class="text-base lg:text-lg mt-0 lg:mt-1">ทั้งหมด</span>
            </div>
            <div
              class="bg-emerald-500 hover:bg-emerald-600 cursor-pointer transition-all duration-300 flex flex-row justify-center items-center py-2 text-white group"
              @click="changeMessage2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-1 stroke-emerald-500 group-hover:stroke-emerald-600 transition-all duration-300"
                @click="changeMessage2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <span class="text-base lg:text-lg mt-0 lg:mt-1">ฝาก</span>
            </div>
            <div
              class="bg-red-500 hover:bg-red-600 cursor-pointer transition-all duration-300 flex flex-row justify-center items-center py-2 text-white rounded-tr-lg rounded-br-lg"
              @click="changeMessage3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>

              <span class="text-base lg:text-lg mt-0 lg:mt-1">ถอน</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full mt-5" v-show="!isNowState">
          <div class="bg-slate-200 shadow py-2 px-2 pt-3 rounded-md mb-3">
            <div class="flex flex-row items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>

              <span class="font-semibold"> รายงานการเงิน </span>
            </div>
          </div>
          <div class="flex flex-row">
            <div
              class="w-full py-2 md:py-3 bg-violet-700 flex flex-row justify-center rounded-t-md"
            >
              <span class="text-white">วันนี้</span>
            </div>
            <div
              class="w-full py-2 md:py-3 bg-gray-400 flex flex-row justify-center rounded-t-md items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
              <span class="text-black"> ก่อนหน้า</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NewStickyBottom />
  </div>
  <div
    v-show="isShow"
    class="w-full h-screen fixed z-50 top-0 flex flex-col justify-center items-center fade"
    style="background-color: rgba(0, 0, 0, 0.7)"
  >
    <div
      class="w-11/12 h-fit md:w-6/12 bg-white shadow-xl rounded-md flex flex-col"
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
          <img class="w-7" src="../assets/small/LINE_logo.svg.png" alt="LINE" />
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
      message: "ฝาก / ถอนเงิน",
      isNowState: true,
      isShow: false,
    };
  },
  methods: {
    toggleisshow() {
      this.isShow = !this.isShow;
    },
    toggleisNowStateTrue() {
      this.isNowState = true;
    },
    toggleisNowStateFalse() {
      this.isNowState = false;
    },
    changeMessage1() {
      this.message = "ฝาก / ถอนเงิน";
    },
    changeMessage2() {
      this.message = "ฝาก";
    },
    changeMessage3() {
      this.message = "ถอน";
    },
  },
};
</script>
