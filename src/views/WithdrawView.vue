<script setup>
import StickyHeader from "../components/User/StickyHeader.vue";
import StickyBottom from "../components/User/StickyBottom.vue";
</script>

<template>
  <div class="min-h-screen h-auto w-full flex flex-col relative bg-emerald-700">
    <StickyHeader />
    <div
      class="w-full min-h-screen bg-gray-900 flex flex-col justify-start items-center pt-8 pb-20"
    >
      <div class="w-11/12 lg:w-1/2 bg-slate-100 rounded-md p-3 mb-6">
        <div
          class="flex flex-row justify-start items-center cursor-pointer mb-3"
        >
          <router-link
            class="text-base hover:text-red-700 transition-all duration-200 no-underline text-gray-800 flex flex-row items-center"
            to="/user"
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

        <div class="bg-slate-100 shadow-sm rounded-md py-2">
          <div class="flex flex-col">
            <div
              class="flex flex-row gap-2 md:gap-4 lg:gap-5 bg-white lg:px-10 p-1 lg:py-3 rounded-lg shadow-xl w-full"
            >
              <div class="flex flex-col items-center flex-none">
                <img
                  src="../assets/th/ktb.svg"
                  class="w-16 md:w-20 lg:w-24 rounded-full p-3 bg-blue-500"
                  alt=""
                />
                <span class="text-sm">KTB</span>
              </div>
              <div class="flex flex-col grow justify-center">
                <span class="text-blue-700 mt-1"> ธนาคาร กรุงไทย </span>
                <span class="mt-1 font-light">
                  ชื่อบัญชี : <span class="font-normal">dasdasdsadsa</span>
                </span>
                <span class="mt-1 font-light">
                  เลขที่บัญชี <span class="font-normal">661xxx554</span>
                </span>
              </div>
            </div>

            <div class="w-full py-2 mt-2 px-2">
              <span class="text-gray-700">จำนวนเงินที่ถอนได้</span>
              <form action="#" class="w-full mb-5">
                <input
                  type="text"
                  value="10.00 บาท"
                  class="text-end w-full py-2 text-3xl text-gray-500 outline-blue-500 px-3"
                />
              </form>
              <div class="flex flex-col mb-3">
                <span class="text-gray-700">จำนวนเงินที่ต้องการถอน</span>
                <span class="text-xs text-gray-700"
                  >*ถอนเงินขั้นต่ำ 150 บาท หรือ 200,000</span
                >
              </div>
              <form action="#" class="w-full">
                <div class="flex flex-row gap-1 mb-3">
                  <input
                    type="text"
                    class="w-9/12 py-2 px-3 rounded-md shadow-md"
                    placeholder="ใส่จำนวนเงินที่ท่านต้องการถอน"
                  />
                  <button
                    class="w-3/12 border border-gray-500 rounded-xl py-2 transition-all duration-300 hover:text-white hover:bg-black"
                  >
                    ทั้งหมด
                  </button>
                </div>
                <button
                  class="w-full py-3 rounded-xl text-gray-700 hover:text-white bg-red-500 transition-all duration-300 hover:bg-red-600 text-lg"
                >
                  ถอนเงิน
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <StickyBottom />
  </div>
</template>