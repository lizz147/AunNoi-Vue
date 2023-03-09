<script setup>
import NewStickyBottom from "../components/User/NewStickyBottom.vue";
import NewStickyHeader from "../components/User/NewStickyHeader.vue";
</script>

<template>
  <div class="min-h-screen h-full pb-16" id="userMain">
    <NewStickyHeader />
    <div
      id="layout"
      class="w-full md:w-3/4 mx-auto mt-2 flex flex-col p-2 rounded-md"
    >
      <div class="bg-white px-3 rounded-lg">
        <router-link
          to="/victory"
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
        <div class="rounded-md py-2">
          <div class="flex flex-col">
            <div class="flex flex-row gap-2">
              <img class="w-6" src="../assets/BAAC.png" alt="th" />
              <span>หวย ธกส</span>
            </div>

            <table class="table-auto w-full mt-3">
              <thead>
                <tr>
                  <th
                    class="font-normal text-center py-2 border border-gray-400 px-2 bg-violet-600 text-white"
                    v-for="item in header"
                  >
                    {{ item }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items">
                  <td
                    class="px-2 py-2 ml-1 text-center border border-gray-400"
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
    <NewStickyBottom />
  </div>
</template>
<script>
export default {
  data() {
    return {
      header: ["วันที่", "3 บน", "2 ตัวล่าง"],
      body: ["01/03/66", "748", "55"],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
};
</script>
