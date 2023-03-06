<script setup>
import StickyBottom from "../components/User/StickyBottom.vue";
import StickyHeader from "../components/User/StickyHeader.vue";
import Date from "../components/ReportAf/Date.vue";
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
            to="/victory"
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
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>

            <span class="font-semibold"> ผลย้อนหลัง </span>
          </div>
        </div>
        <div class="bg-slate-100 shadow-sm rounded-md py-2">
          <div class="flex flex-col">
            <div class="flex flex-row gap-2">
              <img class="w-6" src="../assets/TH.png" alt="th" />
              <span>หวยรัฐบาลไทย</span>
            </div>

            <table class="table-auto w-full mt-3">
              <thead>
                <tr>
                  <th
                    class="font-normal text-start py-2 border border-gray-400 px-2 bg-violet-600 text-white"
                    v-for="item in header"
                  >
                    {{ item }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items">
                  <td
                    class="px-2 py-2 ml-1 border border-gray-400"
                    v-for="item in body"
                  >
                    {{ item }}
                  </td>
                </tr>
              </tbody>
            </table>
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
      header: ["วันที่", "รางวัลที่ 1", "3 ตัวหน้า", "3 ตัวล่าง", "2 ตัวล่าง"],
      body: ["01/03/66", "01/03/66", "	577, 919", "748, 984", "55"],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
};
</script>
