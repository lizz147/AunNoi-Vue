<template>
  <div class="border-t-0 border border-gray-500 p-3">
    <div class="w-full flex flex-col">
      <h3>แจ้งถอนรายได้</h3>
      <span class="bg-gray-300 h-0.5 w-full my-3"></span>
      <div class="w-full mt-3">
        <p
          class="w-full text-start text-blue-700 px-5 leading-loose text-sm md:text-base"
        >
          *รายได้จากระบบแนะนำ จะถอนเข้าเป็นเงินเครดิต
          หากสงสัยโปรดติดต่อผู้แนะนำที่ท่านสมัครสมาชิก หรือ ติดต่อเจ้าหน้าที่*
        </p>
        <div class="flex flex-col lg:flex-row gap-2 mt-2">
          <form action="#" class="w-full">
            <label for="">รายได้ปัจจุบัน - คงเหลือ</label>
            <input
              disabled
              type="text"
              value="0.00"
              class="text-yellow-700 text-lg py-3 px-5 text-end w-full shadow-lg border border-gray-400 mt-1"
            />
          </form>
          <div class="flex flex-col w-full mt-1">
            <span
              >จำนวนเงินที่ต้องการถอน<span class="text-red-500 text-sm mb-1"
                >(*ขั้นต่ำ 50 บาท)</span
              ></span
            >
            <form action="#" class="flex flex-row items-center w-full gap-2">
              <input
                type="text"
                class="shadow-lg w-8/12 border border-gray-500 py-2 lgpy-3 text-lg px-4 rounded-md"
                placeholder="ใส่จำนวนเงินที่ต้องการถอน"
              />
              <button
                class="w-4/12 bg-red-500 h-full rounded-xl text-white py-3"
              >
                ถอนรายได้
              </button>
            </form>
          </div>
        </div>
        <div class="grid grid-cols-2 mt-2">
          <div
            @click="SetIncomeState"
            :class="{ 'bg-green-600 text-white': this.isIncomeState }"
            class="text-center py-3 rounded-t-lg cursor-pointer border border-gray-500 border-r-0 transition-all duration-300"
          >
            ยอดราย AF
          </div>
          <div
            @click="SetWithdrawState"
            :class="{ 'bg-green-600 text-white': this.isWithdrawState }"
            class="text-center py-3 rounded-t-lg text-gray-700 cursor-pointer border border-gray-500 transition-all duration-300"
          >
            ยอดถอน AF
          </div>
        </div>
        <form
          action="#"
          class="flex flex-col lg:flex-row justify-center lg:justify-between mt-2 lg:px-0"
        >
          <select
            class="w-full px-3 py-2 border border-gray-500 rounded-xl mb-2 lg:mb-0 lg:w-3/12"
          >
            <option value="1" selected>ประเภทรายได้</option>
            <option value="1">เงินเดือน</option>
            <option value="1">ส่วนแบ่ง AF</option>
            <option value="1">รายได้คลิกแชร์</option>
          </select>
          <input
            class="border border-gray-500 py-2 px-3 w-full lg:w-3/12 rounded-xl"
            type="date"
          />
        </form>
        <table class="table-auto w-full mt-3" v-show="isIncomeState">
          <thead>
            <tr>
              <th
                class="font-normal text-start py-2 border border-gray-400 px-2 bg-slate-300 text-blue-600"
                v-for="item in tableHeader1"
              >
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableBody">
              <td
                class="px-2 py-2 ml-1 border border-gray-400"
                v-for="item in tableContent1"
              >
                {{ item }}
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table-auto w-full mt-3" v-show="isWithdrawState">
          <thead>
            <tr>
              <th
                class="font-normal text-start py-2 border border-gray-400 px-2 bg-slate-300 text-blue-600"
                v-for="item in tableHeader2"
              >
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tableBody">
              <td
                class="px-2 py-2 ml-1 border border-gray-400"
                v-for="item in tableContent2"
              >
                {{ item }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIncomeState: true,
      isWithdrawState: false,
      tableHeader1: [
        "วันที่-เวลาที่รายได้เข้า",
        "ประเภท",
        "จำนวนเงินฝากที่เข้า",
        "จำนวนเงินก่อนฝาก",
        "คงเหลือ",
      ],
      tableHeader2: [
        "วันที่-เวลาที่ถอน",
        "จำนวนที่ถอน",
        "จำนวนเงินก่อนถอน",
        "คงเหลือ",
      ],
      tableBody: [1, 2, 3, 4, 5],
      tableContent1: ["-","-","-","-","-"],
      tableContent2: ["-","-","-","-"],
    };
  },
  methods: {
    SetIncomeState() {
      this.isIncomeState = true;
      this.isWithdrawState = false;
    },
    SetWithdrawState() {
      this.isIncomeState = false;
      this.isWithdrawState = true;
    },
  },
};
</script>
