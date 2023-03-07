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

          ย้อนกลับ
        </router-link>
        <div class="bg-slate-200 shadow py-2 px-2 pt-3 rounded-md mb-3">
          <div class="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 mr-1 stroke-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>

            <span class="font-semibold"> โพยหวย </span>
          </div>
        </div>
        <div class="flex flex-col">
          <router-link
            to="#"
            class="no-underline bg-violet-600 py-2 flex flex-row justify-center gap-1 text-white rounded-md hover:bg-violet-700 cursor-pointer transition-all duration-200 text-lg"
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
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            แทงหวย
          </router-link>

          <div class="border border-black flex flex-col rounded-lg mt-3">
            <div
              class="flex flex-row justify-between px-3 bg-gray-600 text-white py-2 rounded-t-lg"
            >
              <div class="flex flex-row gap-1">
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
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
                <span class="text-xs md:text-base"> ยอดแทงวันนี้ </span>
              </div>
              <div class="flex flex-row gap-1">
                <span class="text-xs md:text-base">
                  จำนวนโพยที่ลบได้ต่อวัน 4 โพย
                </span>
              </div>
            </div>
            <div class="grid grid-cols-3 p-3 place-content-center">
              <button
                class="bg-blue-600 flex py-2 flex-col items-center gap-1 text-white hover:bg-blue-700 transition-all duration-200 rounded-md w-full"
              >
                <span class="text-xs md:text-base">ยอดรวม</span>
                <span class="text-sm md:text-base"> ฿ 0.00 </span>
              </button>
              <div
                class="flex flex-col items-center border-l border-r border-gray-500 mx-1 md:mx-3 lg:mx-5"
              >
                <span class="text-xs md:text-base">ออกผลแล้ว</span>
                <span class="text-emerald-700">0</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-xs md:text-base">ยังไม่ออกผล</span>
                <span class="text-blue-700">0</span>
              </div>
            </div>
          </div>

          <div class="shadow-md">
            <form class="w-full mt-2" action="#">
              <select
                class="w-full outline-none py-2 px-3 border border-blue-500 rounded-md mb-1"
              >
                <option value="1" selected>หวยทั้งหมด</option>
                <option value="1">หวยรัฐบาลไทย</option>
                <option value="1">หวยหุ้น</option>
                <option value="1">จับยี่กี่ VIP</option>
                <option value="1">หวยออมสิน</option>
                <option value="1">หวย ธกส</option>
                <option value="1">หวยลาว หวยจำปาสัก</option>
                <option value="1">หวยฮานาย 4D</option>
                <option value="1">หวยลาวทดแมน</option>
              </select>
            </form>
            <div class="grid grid-cols-4">
              <div
                class="py-4 bg-blue-500 flex flex-col justify-center items-center text-white transition-all duration-200 cursor-pointer hover:bg-blue-600 text-xs md:text-base text-center rounded-t-lg"
              >
                โพย
              </div>
              <div
                class="py-4 bg-orange-500 flex flex-col justify-center items-center text-white transition-all duration-200 cursor-pointer hover:bg-orange-600 text-xs md:text-base text-center rounded-t-lg"
              >
                โพยหวยที่ยังไม่ออกผล
              </div>
              <div
                class="py-4 bg-emerald-500 flex flex-col justify-center items-center text-white transition-all duration-200 cursor-pointer hover:bg-emerald-600 text-xs md:text-base text-center rounded-t-lg"
              >
                โพยหวยออกผลแล้ว
              </div>
              <div
                class="py-4 bg-gray-500 flex flex-col justify-center items-center text-white transition-all duration-200 cursor-pointer hover:bg-gray-600 text-xs md:text-base text-center rounded-t-lg"
              >
                โพยก่อนหน้า
              </div>
            </div>
            <div class="w-full flex flex-row py-3 justify-center bg-blue-200 mb-3">
              <span class="text-red-500">ไม่มีรายการ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NewStickyBottom />
  </div>
</template>
