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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span class="font-semibold text-sm md:text-base">
              เพิ่มบัญชีธนาคาร
            </span>
            <router-link
              to="/user/bankacount/checkbank"
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>

              เช็คสถานะบัญชีธนาคาร</router-link
            >
          </div>
        </div>
        <div class="bg-slate-100 shadow-sm rounded-md py-2">
          <div class="flex flex-col">
            <div class="w-full">
              <form action="#" class="flex flex-col lg:grid lg:grid-cols-2 w-full p-3 gap-3">
                <div class="flex flex-col gap-1 w-full">
                  <div class="flex flex-row gap-1 w-full">
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
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>

                    <label for="#">เลือกธนาคาร</label>
                  </div>
                  <select
                    class="w-full py-2 border border-gray-600 rounded-md px-3"
                  >
                    <option value="" selected>กรุณาเลือกธนาคาร</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div class="flex flex-col gap-1 w-full">
                  <div class="flex flex-row gap-1 w-full">
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
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>

                    <label for="#">ชื่อบัญชี</label>
                  </div>
                  <input
                    disabled
                    type="text"
                    class="border border-gray-600 py-2 px-3 rounded-md outline-blue-500 focus:border-blue-500"
                    value="นายศตวรรษ มณีศรี"
                  />
                </div>
                <div class="flex flex-col gap-1 w-full">
                  <div class="flex flex-row gap-1 w-full">
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
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      />
                    </svg>

                    <label for="#">เลขที่บัญชี</label>
                  </div>
                  <input
                    type="text"
                    class="border border-gray-600 py-2 px-3 rounded-md outline-blue-500 focus:border-blue-500"
                    placeholder="ระบุเฉพาะตัวเลข"
                  />
                </div>
                <div class="flex flex-col gap-1 w-full">
                  <div class="flex flex-row gap-1 w-full">
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <label for="#">ยืนยันเลขที่บัญชี</label>
                  </div>
                  <input
                    type="text"
                    class="border border-gray-600 py-2 px-3 rounded-md outline-blue-500 focus:border-blue-500"
                    placeholder="ยืนยันเลขที่บัญชีอีกครั้ง"
                  />
                </div>
              </form>
            </div>
            <div class="flex flex-row w-full gap-2 mt-4">
              <button
                class="py-2 flex flex-row justify-center bg-gray-500 w-full rounded-lg hover:bg-gray-600 transition-all duration-300"
              >
                <div
                  class="flex flex-row justify-center gap-0.5 md:gap-1 lg:gap-2"
                >
                  <span class="text-white font-normal text-sm md:text-base">
                    ยกเลิก
                  </span>
                </div>
              </button>
              <button
                class="py-2 flex flex-row justify-center bg-emerald-500 w-full rounded-lg hover:bg-emerald-600 transition-all duration-300"
              >
                <div class="flex flex-row justify-center gap-2">
                  <span class="text-white font-normal text-sm md:text-base">
                    เพิ่มบัญชี
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <StickyBottom />
</template>
