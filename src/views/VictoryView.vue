<script setup>
import NewStickyBottom from "../components/User/NewStickyBottom.vue";
import NewStickyHeader from "../components/User/NewStickyHeader.vue";
</script>

<template>
  <div class="min-h-screen h-full" id="userMain">
    <NewStickyHeader />
    <div
      id="layout"
      class="w-full md:w-3/4 mx-auto mt-2 flex flex-col p-2 min-h-screen rounded-md"
    >
      <div class="bg-white px-3 rounded-lg">
        <router-link
          to="/user"
          class="text-blue-500 no-underline hover:text-blue-700 transition-all duration-200 flex flex-row gap-1 my-2"
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
        <div class="bg-slate-200 shadow py-2 px-2 pt-3 rounded-md mb-3">
          <div class="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 mr-1 stroke-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <span class="font-semibold"> ผลหวย </span>
          </div>
        </div>
        <div class="rounded-md py-2">
          <div class="flex flex-col">
            <span class="flex flex-row gap-1 mb-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              วันที่</span
            >
            <vue-tailwind-datepicker
              as-single
              placeholder="mm/dd/yyyy"
              class="border-gray-500"
            />
            <div class="w-full bg-violet-600 py-2 px-4 rounded-lg mt-2 mb-3">
              <span class="text-white">กลุ่มหวยไทย</span>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <router-link
                to="victory/thai"
                class="border-gray-500 flex flex-row no-underline rounded-3xl"
                style="border: 5px solid"
              >
                <img
                  style="object-fit: cover"
                  class="w-4/12 rounded-tl-2xl rounded-bl-2xl"
                  src="../assets/flagth.jpg"
                  alt="flagth"
                />
                <div
                  class="w-8/12 flex flex-col gap-3 p-2 pl-none bg-slate-100 rounded-tr-3xl rounded-br-3xl"
                >
                  <div class="flex flex-row gap-1">
                    <div
                      class="bg-blue-500 px-1 rounded-md flex flex-col justify-center"
                    >
                      <img
                        class="w-12 rounded-full object-cover"
                        src="../assets/TH.png"
                        alt=""
                      />
                    </div>
                    <div
                      class="bg-blue-900 px-2 py-4 rounded-md flex flex-col w-full"
                    >
                      <span class="text-white text-sm lg:text-base mb-1"
                        >หวยรัฐบาลไทย</span
                      >
                      <span
                        class="text-black bg-white rounded-xl px-2 text-xs w-20"
                        >01/03/66</span
                      >
                    </div>
                  </div>
                  <div class="flex flex-col bg-white shadow-md rounded-lg">
                    <span class="text-center my-1 text-black">รางวัลที่ 1</span>
                    <div class="bg-gray-400 h-0.5 w-full my-2"></div>
                    <span
                      class="text-black text-center text-4xl lg:text-5xl font-bold"
                      >417652</span
                    >
                  </div>
                  <div class="flex flex-row justify-around gap-2">
                    <div
                      class="flex flex-col bg-white shadow-md rounded-lg w-full"
                    >
                      <span class="text-center text-sm text-black"
                        >3 ตัวหน้า</span
                      >
                      <div class="bg-gray-400 h-0.5 w-full"></div>
                      <div
                        class="text-black w-full flex flex-row justify-center"
                      >
                        <span class="px-2 border-r-2 border-gray-400">577</span>
                        <span class="px-2">919</span>
                      </div>
                      <span class="text-center text-sm text-black mt-2"
                        >3 ตัวท้าย</span
                      >
                      <div class="bg-gray-400 h-0.5 w-full"></div>
                      <div
                        class="text-black w-full flex flex-row justify-center"
                      >
                        <span class="px-2 border-r-2 border-gray-400">748</span>
                        <span class="px-2">984</span>
                      </div>
                    </div>
                    <div
                      class="flex flex-col bg-white shadow-md rounded-lg w-full"
                    >
                      <span class="text-center text-sm text-black"
                        >2 ตัวล่าง</span
                      >
                      <div class="bg-gray-400 h-0.5 w-full"></div>
                      <span
                        class="text-red-600 text-center text-4xl mt-4 font-bold"
                        >55</span
                      >
                    </div>
                  </div>
                </div>
              </router-link>
              <div class="flex flex-col gap-1">
                <router-link
                  to="victory/aomsin"
                  class="border-gray-500 flex flex-row no-underline rounded-3xl h-fit"
                  style="border: 5px solid violet"
                >
                  <img
                    style="object-fit: cover"
                    class="w-4/12 rounded-tl-2xl rounded-bl-2xl"
                    src="../assets/AOM.png"
                    alt="aomsin"
                  />
                  <div
                    class="w-8/12 flex flex-col gap-3 p-2 pl-none bg-slate-100 rounded-tr-3xl rounded-br-3xl"
                  >
                    <div class="flex flex-row gap-1">
                      <div
                        class="bg-pink-500 px-1 rounded-md flex flex-col justify-center"
                      >
                        <img
                          class="w-12 rounded-full object-cover"
                          src="../assets/AOM.png"
                          alt=""
                        />
                      </div>
                      <div
                        class="bg-pink-600 px-2 py-4 rounded-md flex flex-col w-full"
                      >
                        <span class="text-white text-sm lg:text-base mb-1"
                          >หวยออมสิน</span
                        >
                        <span
                          class="text-black bg-white rounded-xl px-2 text-xs w-20"
                          >01/03/66</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-col bg-white shadow-md rounded-lg">
                      <div class="grid grid-cols-2 text-black">
                        <span
                          class="text-center border-r-2 border-b-2 border-gray-500"
                          >3 ตัวบน</span
                        >
                        <span class="text-center border-b-2 border-gray-500"
                          >2 ตัวล่าง</span
                        >
                        <span
                          class="text-center text-xl border-r-2 border-gray-500"
                          >545</span
                        >
                        <span class="text-center text-xl">05</span>
                      </div>
                    </div>
                  </div>
                </router-link>
                <router-link
                  to="victory/gts"
                  class="border-gray-500 flex flex-row no-underline rounded-3xl h-fit"
                  style="border: 5px solid green"
                >
                  <img
                    style="object-fit: cover"
                    class="w-4/12 rounded-tl-2xl rounded-bl-2xl"
                    src="../assets/tgs.jpg"
                    alt="aomsin"
                  />
                  <div
                    class="w-8/12 flex flex-col gap-3 p-2 pl-none bg-slate-100 rounded-tr-3xl rounded-br-3xl"
                  >
                    <div class="flex flex-row gap-1">
                      <div
                        class="bg-emerald-500 px-1 rounded-md flex flex-col justify-center"
                      >
                        <img
                          class="w-12 rounded-full object-cover"
                          src="../assets/BAAC.png"
                          alt=""
                        />
                      </div>
                      <div
                        class="bg-emerald-600 px-2 py-4 rounded-md flex flex-col w-full"
                      >
                        <span class="text-white text-sm lg:text-base mb-1"
                          >หวยออมสิน</span
                        >
                        <span
                          class="text-black bg-white rounded-xl px-2 text-xs w-20"
                          >01/03/66</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-col bg-white shadow-md rounded-lg">
                      <div class="grid grid-cols-2 text-black">
                        <span
                          class="text-center border-r-2 border-b-2 border-gray-500"
                          >3 ตัวบน</span
                        >
                        <span class="text-center border-b-2 border-gray-500"
                          >2 ตัวล่าง</span
                        >
                        <span
                          class="text-center text-xl border-r-2 border-gray-500"
                          >545</span
                        >
                        <span class="text-center text-xl">05</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NewStickyBottom />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [1, 2],
    };
  },
};
</script>
