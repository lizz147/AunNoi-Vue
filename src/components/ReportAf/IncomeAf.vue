<script setup>
import Date from "../ReportAf/Date.vue";
import { ref } from "vue";
const pixCodeInput = ref(null);
function copyPixCodeClick() {
  navigator.clipboard.writeText(pixCodeInput.value.textContent);
  alert("คัดลอกลิ้งแนะนำสำเร็จ!");
}
</script>
<template>
  <div class="border-t-0 border border-gray-500 lg:p-3">
    <div class="w-full flex flex-col lg:flex-row items-center">
      <img
        class="w-11/12 lg:w-4/12 mt-2 lg:mt-3"
        src="../../assets/mastercard.svg"
        alt="mastercard"
      />
      <div class="flex flex-col justify-start w-full px-2 my-3">
        <h5 class="ml-2">ลิ้งสำหรับแนะนำ</h5>
        <span
          ref="pixCodeInput"
          class="flex flex-row justify-between cursor-pointer outline-none px-4 py-2 w-full border-2 border-gray-700 rounded-lg"
          >https://www.youtube.com/
        </span>
        <div @click="copyPixCodeClick" class="flex flex-row w-full">
          <button
            class="bg-red-500 py-2 w-full text-white my-2 rounded-md transition-all duration-300 hover:bg-red-600 flex flex-row justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>

            คัดลอกลิ้งแนะนำ
          </button>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
          <div
            class="shadow-xl border border-gray-600 flex flex-col rounded-xl px-3 py-3 pb-0"
          >
            <span class="text-sm">ยอดเสียทั้งสายงาน {{ "&nbsp;" }}</span>
            <span class="text-end text-red-700 text-lg font-bold mt-6"
              >0.00</span
            >
          </div>
          <div
            class="shadow-xl border border-gray-600 flex flex-col rounded-xl px-3 py-3"
          >
            <span class="text-sm">ยอดเสียทั้งงานเดือนนี้</span>
            <span class="text-end text-red-700 text-lg font-bold mt-6"
              >0.00</span
            >
          </div>
          <div
            class="shadow-xl border border-gray-600 flex flex-col rounded-xl px-3 py-3"
          >
            <span class="text-sm">รายได้เดือนนี้</span>
            <span class="text-end text-green-700 text-lg font-bold mt-6"
              >0.00</span
            >
          </div>
          <div
            class="shadow-xl border border-gray-600 flex flex-col rounded-xl px-3 py-3"
          >
            <span class="text-sm">รายได้วันนี้</span>
            <span class="text-end text-green-700 text-lg font-bold mt-6"
              >0.00</span
            >
          </div>
        </div>
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
      <Date class="px-2 my-3" />
    </div>
    <table class="table-auto w-full mt-3">
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
</template>

<script>
export default {
  data() {
    return {
      linkdata: "https://www.youtube.com/",
      tableHeader: [
        "วันที่",
        "ยอดเสีย",
        "รายรับ/รายรับสูงสุดวันนี้",
        "รายรับจริง",
        "สถานะ",
      ],
      tableBody: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tableContent: ["20-01-2566", "0.00", "0.00/0.00", "0.00", "ยังไม่จ่าย"],
    };
  },
};
</script>
