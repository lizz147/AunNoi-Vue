<script setup>
import StickyBottom from "../components/User/StickyBottom.vue";
import StickyHeader from "../components/User/StickyHeader.vue";
</script>

<template>
  <div class="min-h-screen h-auto w-full flex flex-col relative bg-emerald-700">
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
        <div class="bg-slate-200 shadow py-2 px-2 pt-3 rounded-md mb-3">
          <div class="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 mr-1 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>

            <span class="font-semibold"> บัญชีธนาคาร </span>
          </div>
        </div>
        <div class="bg-slate-100 shadow-sm rounded-md py-2">
          <div class="flex flex-col">
            <div class="flex flex-row items-center gap-1 md:gap-2 lg:gap-3">
              <span class="text-white bg-gray-500 py-2 px-4 lg:px-6 rounded-3xl"
                >ชื่อบัญชี</span
              >
              <span class="text-gray-700 text-lg md:text-xl lg:text-2xl"
                >นายศตวรรษ มณีศรี</span
              >
            </div>
            <div class="w-full mt-3">
              <span class="flex flex-row gap-2"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                บัญชีธนาคารที่สามารถใช้ได้
              </span>
            </div>
            <div class="flex flex-row w-full mt-2 gap-2 flex-wrap">
              <div
                class="flex flex-col items-center w-fit p-3 bg-slate-300 border border-gray-400 shadow-lg rounded-lg"
                v-for="item in items"
              >
                <img
                  class="bg-blue-500 w-20 rounded-md"
                  src="../assets/th/ktb.svg"
                  alt="ktb"
                />
                <div class="flex flex-col items-center">
                  <span class="my-1 text-sm md:text-base">ธนาคารกรุงไทย</span>
                  <span
                    class="my-1 bg-gray-800 w-full text-center rounded-md text-white"
                    >6611929495</span
                  >
                  <span class="my-1 text-sm md:text-base"
                    >นายศตวรรษ มณีศรี</span
                  >
                  <div class="flex flex-col w-full items-center">
                    <input
                      class="mt-[0.3rem] mr-2 h-3.5 w-8 mb-1 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-green-500 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="text-center pl-[0.15rem] hover:cursor-pointer"
                      for="flexSwitchCheckDefault"
                      >เปิดใช้งาน</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-row w-full gap-2 mt-4">
              <router-link to="/user/bankacount/checkbank" class="w-full no-underline">
                <button
                  class="py-2 flex flex-row justify-center bg-blue-500 w-full rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  <div class="flex flex-row justify-center gap-0.5 md:gap-1 lg:gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 stroke-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>

                    <span class="text-white font-normal text-sm md:text-base"> เช็คสถานะบัญชี </span>
                  </div>
                </button>
              </router-link>

              <router-link to="/user/bankacount/addbank" class="w-full no-underline">
                <button
                  class="py-2 flex flex-row justify-center bg-emerald-500 w-full rounded-lg hover:bg-emerald-600 transition-all duration-300"
                >
                  <div class="flex flex-row justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 stroke-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>

                    <span class="text-white font-normal text-sm md:text-base"> เพิ่มบัญชี </span>
                  </div>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <StickyBottom />
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
