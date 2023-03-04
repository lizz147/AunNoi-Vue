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
        <form class="" action="#">
          <input
            class="transition-all duration-200 hover:bg-black hover:border-blue-100 cursor-pointer hover:text-white outline-none px-3 py-2 w-full border-2 border-gray-700 rounded-lg"
            type="text"
            value="https://www.youtube.com/"
          />
        </form>
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
      <form
        action="#"
        class="flex flex-row justify-center lg:justify-end mt-2 px-3 lg:px-0"
      >
        <input
          class="border border-gray-500 py-2 px-3 w-full lg:w-3/12 rounded-xl"
          type="date"
        />
      </form>
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
