<script setup>
import StickyBottom from "../components/User/StickyBottom.vue";
import StickyHeader from "../components/User/StickyHeader.vue";
</script>

<template>
  <div class="min-h-screen h-auto w-full flex flex-col relative bg-gray-900">
    <StickyHeader />
    <div
      class="w-full bg-gray-900 flex flex-col justify-start items-center pt-8 pb-20"
    >
      <div class="w-11/12 lg:w-1/2 bg-slate-100 rounded-md p-3 mb-6">
        <div
          class="flex flex-row justify-start items-center cursor-pointer mb-3"
        >
          <router-link
            class="text-base hover:text-red-700 transition-all duration-200 no-underline text-gray-800 flex flex-row items-center"
            to="/user/bankacount"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 mt-0.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            ย้อนกลับ
          </router-link>
        </div>
        <div class="bg-slate-200 shadow py-2 px-2 pt-3 rounded-md mb-3">
          <div class="flex flex-row items-center">
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>

            <span class="font-semibold text-sm md:text-base">
              สถานะบัญชีธนาคาร
            </span>
            <router-link
              to="/user/bankacount/addbank"
              class="ml-auto bg-violet-500 py-2 px-3 rounded-md text-white no-underline transition-all hover:bg-violet-600 duration-300 flex flex-row gap-1"
            >
              <svg
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              เพิ่มบัญชี</router-link
            >
          </div>
        </div>
        <div class="bg-slate-100 shadow-sm rounded-md py-2">
          <div class="flex flex-col">
            <div class="w-full border border-gray-600 rounded-lg">
              <div class="flex flex-col md:flex-row w-full">
                <div class="flex flex-row bg-gray-800 w-full p-2">
                  <img
                    class="bg-blue-500 w-11 lg:w-12"
                    src="../assets/th/ktb.svg"
                    alt="ktb"
                  />
                  <div class="flex flex-col ml-3">
                    <span
                      class="bg-white text-gray-700 w-fit p-1 rounded-md px-4"
                      >KTB</span
                    >
                    <span class="text-white">ธนาคารกรุงไทย</span>
                  </div>
                </div>
                <div
                  class="w-full bg-green-500 p-2 flex flex-col items-center justify-center"
                >
                  <span class="text-gray-900">สถานะ</span>
                  <span class="flex flex-row gap-1 text-white">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    อนุมัติ
                  </span>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="flex flex-col md:flex-row justify-between items-start lg:items-center lg:gap-0"
                >
                  <span class="text-blue-500 ml-2 mt-2 lg:mt-0 w-full">
                    ชื่อบัญชี
                    <span class="text-gray-900">นายศตวรรษ มณีศรี</span>
                  </span>
                  <span class="text-blue-500 ml-2 my-2 lg:my-0 w-full">
                    เลขที่บัญชี
                    <span class="text-gray-900">6611929495</span>
                  </span>
                  <span
                    class="bg-yellow-400 text-gray-900 flex flex-row gap-1 py-3 px-2 rounded-b-lg md:rounded-bl-none w-full"
                  >
                    <svg
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
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <span class="text-sm xl:text-base"
                      >บัญชีของท่านได้รับการอนุมัติ</span
                    >
                  </span>
                </div>
              </div>
            </div>
            <router-link
              to="/user/deposit"
              class="w-full py-2 text-white mt-2 bg-emerald-600 flex flex-row justify-center transition-all rounded-md hover:bg-emerald-700 cursor-pointer no-underline"
            >
              <div class="flex flex-row gap-1">
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
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>ฝากเงิน</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <StickyBottom />
</template>
