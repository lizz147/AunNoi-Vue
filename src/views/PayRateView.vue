<script setup>
import Header from "../components/Home/Header.vue";
import Menu from "../components/Home/Menu.vue";
</script>
<template>
  <Header />
  <Menu />
  <div class="container">
    <div class="grid lg:grid-cols-3 p-7 gap-4">
      <div class="flex flex-col items-center rounded-xl">
        <h4 class="py-3 text-yellow-500 w-full text-center">
          จ่ายสูงที่สุด <span class="text-base text-black">บาทละ</span> 905
        </h4>
        <h4 class="w-full text-center mb-2">หวยรัฐบาลไทย</h4>
        <table class="table-auto w-full border border-black">
          <thead>
            <tr>
              <th class="py-2 bg-amber-400">ประเภท</th>
              <th class="py-2 bg-amber-400">ราคา</th>
              <th class="py-2 bg-amber-400">อัตราจ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in Thai"
              class="text-center"
              :class="{
                'bg-slate-100': index % 2 === 0,
              }"
            >
              <td class="py-2">{{ item.position }}</td>
              <td class="py-2">บาทละ</td>
              <td
                class="py-2"
                :class="{
                  'bg-yellow-100 text-yellow-700 text-lg font-bold':
                    index === 0,
                }"
              >
                {{ item.price }} บาท
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center rounded-xl">
        <h4 class="py-3 text-yellow-500 w-full text-center">
          โปรโมชั่นจ่ายหนัก
        </h4>
        <h4 class="w-full text-center mb-2">โปรโมชั่นจ่ายหนัก</h4>
        <table class="table-auto w-full border border-black">
          <thead>
            <tr>
              <th class="py-2 bg-amber-400">ประเภท</th>
              <th class="py-2 bg-amber-400">ราคา</th>
              <th class="py-2 bg-amber-400">อัตราจ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in Yeegee"
              class="text-center"
              :class="{
                'bg-slate-100': index % 2 === 0,
              }"
            >
              <td class="py-2">{{ item.position }}</td>
              <td class="py-2">บาทละ</td>
              <td
                class="py-2"
                :class="{
                  'bg-yellow-100 text-yellow-700 text-lg font-bold':
                    index === 0,
                }"
              >
                {{ item.price }} บาท
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center rounded-xl">
        <h4 class="py-3 text-yellow-500 w-full text-center">
          โปรโมชั่นจ่ายหนัก
        </h4>
        <h4 class="w-full text-center mb-2">โปรโมชั่นจ่ายหนัก</h4>
        <table class="table-auto w-full border border-black">
          <thead>
            <tr>
              <th class="py-2 bg-amber-400">ประเภท</th>
              <th class="py-2 bg-amber-400">ราคา</th>
              <th class="py-2 bg-amber-400">อัตราจ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in Hanoi"
              class="text-center"
              :class="{
                'bg-slate-100': index % 2 === 0,
              }"
            >
              <td class="py-2">{{ item.position }}</td>
              <td class="py-2">บาทละ</td>
              <td
                class="py-2"
                :class="{
                  'bg-yellow-100 text-yellow-700 text-lg font-bold':
                    index === 0,
                }"
              >
                {{ item.price }} บาท
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center rounded-xl">
        <h4 class="py-3 text-yellow-500 w-full text-center">
          หวยชุดลาว <span class="text-base text-black">ชุดละ </span> 120 บาท
        </h4>
        <h4 class="w-full text-center mb-2">หวยรัฐบาลไทย</h4>
        <table class="table-auto w-full border border-black">
          <thead>
            <tr>
              <th class="py-2 bg-amber-400">ประเภท</th>
              <th class="py-2 bg-amber-400">เงินรางวัล</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in Laos"
              class="text-center"
              :class="{
                'bg-slate-100': index % 2 === 0,
              }"
            >
              <td class="py-2">{{ item.position }}</td>
              <td
                class="py-2"
                :class="{
                  'bg-yellow-100 text-yellow-700 text-lg font-bold':
                    index === 0,
                }"
              >
                {{ item.price }} บาท
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
      Thai: [
        {
          price: "905",
          position: "3 ตัวบน",
        },
        { price: "155", position: "3 ตัวโต๊ด" },
        {
          price: "455",
          position: "3 ตัวล่าง",
        },
        { price: "455", position: "3 ตัวหน้า" },
        {
          price: "92",
          position: "2 ตัวบน",
        },
        {
          price: "92",
          position: "2 ตัวล่าง",
        },
        { price: "3.5", position: "วิ่งล่าง" },
        {
          price: "4.5",
          position: "วิ่งบน",
        },
      ],
      Yeegee: [
        {
          price: "905",
          position: "3 ตัวบน",
        },
        {
          price: "125 ",
          position: "3 ตัวโต๊ด",
        },
        {
          price: "92",
          position: "2 ตัวบน",
        },
        {
          price: "92",
          position: "2 ตัวล่าง",
        },
        {
          price: "3.5",
          position: "วิ่งบน",
        },
        {
          price: "4.5",
          position: "วิ่งล่าง",
        },
      ],
      Hanoi: [
        {
          price: "905",
          position: "3 ตัวบน",
        },
        {
          price: "125 ",
          position: "3 ตัวโต๊ด",
        },
        {
          price: "92",
          position: "2 ตัวบน",
        },
        {
          price: "92",
          position: "2 ตัวล่าง",
        },
        {
          price: "วิ่งบน",
          position: "วิ่งบน",
        },
        {
          price: "วิ่งล่าง",
          position: "วิ่งล่าง",
        },
      ],
      Laos: [
        {
          price: "120,000",
          position: "ถูก 4 ตัวตรง",
        },
        {
          price: "41,000",
          position: "ถูก 3 ตัวตรง",
        },
        {
          price: "5,500",
          position: "ถูก 4 ตัวโต๊ด",
        },
        {
          price: "4,100",
          position: "ถูก 3 ตัวโต๊ด",
        },
        {
          price: "1,700",
          position: "ถูก 2 ตัวหน้า",
        },
        {
          price: "1,700",
          position: "ถูก 2 ตัวหลัง",
        },
      ],
    };
  },
};
</script>
