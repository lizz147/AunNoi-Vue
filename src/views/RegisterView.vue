<script setup>
import BottomButton from "../components/Register/BottomButton.vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
</script>
<template>
  <div class="h-screen flex flex-col justify-between">
    <div class="container">
      <div class="flex flex-row w-full items-center gap-3 mt-10">
        <div
          :class="{
            'bg-green-500': process >= 1,
            'bg-slate-500': process == 0,
          }"
          class="text-white px-3 py-1 md:px-5 md:py-3 rounded-full text-center"
        >
          1
        </div>
        <div
          :class="{ 'bg-green-500': process >= 2, 'bg-gray-500': process <= 1 }"
          class="h-0.5 w-full"
        ></div>
        <div
          :class="{
            'bg-green-500': process >= 2,
            'bg-slate-500': process <= 1,
          }"
          class="text-white px-3 py-1 md:px-5 md:py-3 rounded-full text-center"
        >
          2
        </div>
        <div
          :class="{ 'bg-green-500': process >= 3, 'bg-gray-500': process <= 2 }"
          class="h-0.5 w-full"
        ></div>
        <div
          :class="{
            'bg-green-500': process >= 3,
            'bg-slate-500': process <= 2,
          }"
          class="text-white px-3 py-1 md:px-5 md:py-3 rounded-full text-center"
        >
          3
        </div>
        <div
          :class="{ 'bg-green-500': process >= 4, 'bg-gray-500': process <= 3 }"
          class="h-0.5 w-full"
        ></div>
        <div
          :class="{
            'bg-green-500': process >= 4,
            'bg-slate-500': process <= 3,
          }"
          class="text-white px-3 py-1 md:px-5 md:py-3 rounded-full text-center"
        >
          4
        </div>
      </div>
      <div
        :class="{ hidden: process != 0 }"
        class="w-full flex flex-col items-center mt-5"
      >
        <form
          action="#"
          class="flex flex-col justify-center items-center w-11/12"
        >
          <div class="mb-4 w-full text-center">
            <p>ระบุเบอร์โทรศัพท์</p>
          </div>
          <div class="mb-4 w-full flex flex-row justify-center">
            <input
              type="tel"
              placeholder="กรอกหมายเลขโทรศัพท์"
              class="text-center w-3/4 py-2 focus:outline-none focus:border-blue-700 border border-gray-800"
            />
          </div>
          <div class="mb-4 w-full flex flex-row justify-center">
            <div
              class="g-recaptcha w-full flex flex-row justify-center"
              data-sitekey="6LeeUK0kAAAAALADGcsAki66hlTP0Abi9VSUj87e"
            ></div>
          </div>
          <div class="mb-4 w-full flex flex-row justify-center">
            <button
              @click="processIncrese"
              type="button"
              class="py-2 border border-gray-800 w-3/4 hover:bg-green-200 hover:text-green-700 hover:border-green-700"
            >
              ถัดไป
            </button>
          </div>
        </form>
      </div>
      <div
        :class="{ hidden: process != 1 }"
        class="w-full flex flex-col items-center mt-5"
      >
        <form
          action="#"
          class="flex flex-col justify-center items-center w-11/12"
        >
          <div class="mb-4 w-full text-center">
            <p>ระบุหมายเลข OTP</p>
          </div>
          <div class="mb-4 w-full flex flex-row justify-center">
            <input
              type="tel"
              placeholder="กรอกหมายเลข OTP"
              class="text-center w-3/4 py-2 focus:outline-none focus:border-blue-700 border border-gray-800"
            />
          </div>
          <div class="mb-4 w-3/4 flex flex-row justify-center gap-2">
            <button
              @click="processDecrese"
              type="button"
              class="py-2 border border-gray-800 w-3/4 hover:bg-red-200 hover:text-red-700 hover:border-red-700"
            >
              ย้อนกลับ
            </button>
            <button
              @click="processIncrese"
              type="button"
              class="py-2 border border-gray-800 w-3/4 hover:bg-green-200 hover:text-green-700 hover:border-green-700"
            >
              ถัดไป
            </button>
          </div>
        </form>
      </div>
      <div
        :class="{ hidden: process != 2 }"
        class="w-full flex flex-col items-center mt-5"
      >
        <form
          action="#"
          class="flex flex-col justify-center items-center w-11/12"
        >
          <div class="mb-2 w-3/4 text-start">
            <p>*ข้อมูลที่จำเป็นต้องกรอก</p>
          </div>
          <div class="mb-4 w-3/4 flex flex-col justify-center items-center">
            <select
              class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>เลือกธนาคาร</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div class="my-4">
              <p class="underline text-red-500">
                กรุณาระบุเลขที่บัญชีที่ตรงกับชื่อสมัครเท่านั้น!
              </p>
            </div>
            <input
              type="tel"
              placeholder="กรอกหมายเลขบัญชี"
              class="text-center w-full py-2 focus:outline-none focus:border-blue-700 border border-gray-800"
            />
          </div>
          <div class="mb-4 w-full flex flex-row justify-center">
            <button
              @click="processIncrese"
              type="button"
              class="py-2 border border-gray-800 w-3/4 hover:bg-red-200 hover:text-red-700 hover:border-red-700"
            >
              ตรวจสอบบัญชี
            </button>
          </div>
        </form>
      </div>
      <div
        :class="{ hidden: process != 3 }"
        class="w-full flex flex-col items-center mt-5"
      >
        <form
          action="#"
          class="flex flex-col justify-center items-center w-11/12"
        >
          <div class="mb-2 w-3/4 text-start">
            <p>*ข้อมูลที่จำเป็นต้องกรอก</p>
          </div>
          <div class="mb-4 w-3/4 flex flex-col justify-center items-center">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>เลือกธนาคาร</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div class="my-4">
              <p class="underline text-red-500">
                กรุณาระบุเลขที่บัญชีที่ตรงกับชื่อสมัครเท่านั้น!
              </p>
            </div>
            <input
              type="tel"
              placeholder="กรอกหมายเลขบัญชี"
              class="text-center w-full py-2 focus:outline-none focus:border-blue-700 border border-gray-800"
            />
          </div>
          <div class="mb-4 w-full flex flex-row justify-center">
            <button
              @click="processIncrese"
              type="button"
              class="py-2 border bg-green-600 border-green-700 w-3/4 text-white"
              disabled
            >
              ตรวจสอบบัญชีสำเร็จ
            </button>
          </div>
        </form>
        <form
          :class="{ hidden: process != 3 }"
          action="#"
          class="flex flex-col justify-center items-center w-11/12"
        >
          <div class="mb-2 w-3/4 text-start">
            <p>ชื่อบัญชี(ชื่อ-นามสกุล)</p>
          </div>
          <div class="mb-4 w-3/4 flex flex-col justify-center items-start">
            <input
              type="text"
              placeholder="กรอกชื่อและนามสกุล"
              class="text-center w-full py-2 focus:outline-none focus:border-blue-700 border border-gray-800"
            />
          </div>
          <div class="mb-2 w-3/4 text-start">
            <p>รหัสผ่าน</p>
          </div>
          <div class="mb-4 w-3/4 flex flex-col justify-center items-start">
            <div class="mb-2 w-full">
              <input
                type="password"
                placeholder="รหัสผ่าน"
                class="text-center w-full py-2 focus:outline-none focus:border-blue-700 border border-gray-800"
              />
            </div>
            <div class="mb-2 w-full">
              <input
                type="password"
                placeholder="ยืนยันรหัสผ่าน"
                class="text-center w-full py-2 focus:outline-none focus:border-blue-700 border border-gray-800"
              />
              <span class="text-red-700"
                >*ต้องเป็นตัวอักษรภาษาอังกฤษผสมตัวเลขความยาว 8-15
                ตัวเท่านั้น*</span
              >
            </div>
          </div>
          <div class="mb-4 w-3/4 flex flex-row justify-center gap-0.5">
            <button
              type="button"
              class="py-2 border-2 border-red-700 text-red-700 w-3/4 hover:bg-red-200 hover:text-red-700 hover:border-red-700"
            >
              ล้างข้อมูล
            </button>
            <button
              @click="processIncrese(), countDownTimer()"
              type="button"
              class="py-2 border-2 border-green-700 text-green-700 w-3/4 hover:bg-green-200 hover:text-green-700 hover:border-green-700"
            >
              ถัดไป
            </button>
          </div>
        </form>
      </div>

      <div
        :class="{ hidden: process != 4 }"
        class="w-full flex flex-col items-center mt-36"
      >
        <div class="flex flex-col items-stretch">
          <div class="mb-3">
            <p class="text-green-600 text-2xl text-center">
              สมัครสมาชิกสำเร็จ!
            </p>
          </div>
          <div class="mb-3">
            <p class="text-3xl text-center">ชื่อผู้ใช้</p>
          </div>
          <div class="mb-3">
            <p class="bg-blue-100 rounded-md px-10 text-xl py-2 text-center">
              USERNAME123
            </p>
          </div>
          <div class="mb-3">
            <p class="text-3xl text-center">รหัสผ่าน</p>
          </div>
          <div class="mb-3">
            <p class="bg-blue-100 rounded-md px-10 text-xl py-2 text-center">
              11223344
            </p>
          </div>
          <div class="mb-3">
            <p class="text-center">
              เข้าสู่ระบบอัติโนมัติภายใน {{ timeLeft }} วินาที
            </p>
          </div>
          <form action="#">
            <input
              type="text"
              value="รู้จักเราจากช่องทางใด (ไม่บังคับ)"
              class="w-full py-2 border border-gray-300 text-center rounded-sm bg-slate-100 focus:outline-none focus:border focus:border-blue-400"
            />
          </form>
        </div>
      </div>
    </div>
    <BottomButton />
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: 60,
      process: 0,
    };
  },
  methods: {
    processIncrese() {
      this.process += 1;
    },
    processDecrese() {
      this.process -= 1;
    },
    countDownTimer() {
      if (this.timeLeft > 0) {
        setTimeout(() => {
          this.timeLeft -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
    async recaptcha() {
      await this.$recaptchaLoaded();
      const token = await this.$recaptcha("login");
    },
  },
};
</script>
