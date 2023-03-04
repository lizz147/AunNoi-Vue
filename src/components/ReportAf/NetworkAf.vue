<script setup>
import Date from "../ReportAf/Date.vue";
</script>
<template>
  <div class="border-t-0 border border-gray-500 p-3">
    <div class="w-full flex flex-col">
      <h3>สมาชิกที่แนะนำ</h3>
      <span class="bg-gray-300 h-0.5 w-full my-3"></span>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
        <div
          class="shadow-xl border border-gray-600 flex flex-col rounded-xl px-3 py-3 pb-0"
        >
          <span class="text-sm lg:text-base"
            >สมาชิกขั้นที่ 1 {{ "&nbsp;" }}</span
          >
          <span class="text-end text-green-700 text-lg font-bold mt-10"
            >0.00</span
          >
        </div>
        <div
          class="shadow-xl border border-gray-600 flex flex-col rounded-xl px-3 py-3"
        >
          <span class="text-sm lg:text-base">สมาชิกขั้นที่ 2</span>
          <span class="text-end text-green-700 text-lg font-bold mt-10"
            >0.00</span
          >
        </div>
        <div
          class="shadow-xl border border-gray-600 flex flex-col rounded-xl px-3 py-3"
        >
          <span class="text-sm lg:text-base">สมัครเดือนนี้</span>
          <span class="text-end text-green-700 text-lg font-bold mt-10"
            >0.00</span
          >
        </div>
        <div
          class="shadow-xl border border-gray-600 flex flex-col rounded-xl px-3 py-3"
        >
          <span class="text-sm lg:text-base">สมัครวันนี้</span>
          <span class="text-end text-green-700 text-lg font-bold mt-10"
            >0.00</span
          >
        </div>
      </div>
      <div class="w-full mt-3">
        <h5 class="mt-2 ml-4">รายได้เดือนนี้</h5>
        <p
          class="w-full text-start text-blue-700 px-5 leading-loose text-sm md:text-base"
        >
          *รายได้ของแต่ละวันจะมีการปรับเงินเพื่อเป็นยอดที่สามารถถอนได้ในทุกเวลา
          06:00น. ของวันถัดไป โดยรายได้ที่ได้นั้นจะทำการตัดยอดใหม่ทุกๆสิ้นเดือน*
        </p>
        <Date class="my-3" />
      </div>
      <div class="flex flex-row">
        <div
          class="border border-gray-500 border-b-0 w-fit pt-2 pb-1 px-3 rounded-t-xl hover:bg-slate-200 transition-all duration-200 cursor-pointer hover:text-blue-500 hover:border-blue-500"
        >
          สมาชิกขั้นที่ 1
        </div>
        <div
          class="border border-gray-500 border-b-0 w-fit pt-2 pb-1 px-3 rounded-t-xl hover:bg-slate-200 transition-all duration-200 cursor-pointer hover:text-blue-500 hover:border-blue-500"
        >
          สมาชิกขั้นที่ 2
        </div>
        <div
          class="border border-gray-500 border-b-0 w-fit pt-2 pb-1 px-3 rounded-t-xl hover:bg-slate-200 transition-all duration-200 cursor-pointer hover:text-blue-500 hover:border-blue-500"
        >
          สมาชิกขั้นที่ 3
        </div>
      </div>
      <table class="table-auto">
        <thead>
          <tr>
            <th
              class="font-normal text-start py-2 border border-gray-400 px-2 bg-slate-300 text-blue-600"
              v-for="item in tableHeader"
            >
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableBody">
            <td
              class="px-2 py-2 ml-1 border border-gray-400"
              v-for="item in tableContent"
            >
              {{ item }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeader: [
        "วันที่",
        "User",
        "ยอดเสียทั้งหมด",
        "ยอดเสียเดือนนี้",
        "ออนไลท์ล่าสุด",
      ],
      tableBody: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tableContent: [
        "20-01-2566",
        "User A",
        "0.00/0.00",
        "0.00",
        "20-01-2566 10:12:03",
      ],
    };
  },
};
</script>
