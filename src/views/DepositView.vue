<script setup>
import StickyHeader from "../components/User/StickyHeader.vue";
import StickyBottom from "../components/User/StickyBottom.vue";
import { ref } from "vue";
const AccountNumber = ref(null);
function copyAccountNumberClick() {
  navigator.clipboard.writeText(AccountNumber.value.textContent);
  alert("คัดลอกเลขบัญชีสำเร็จ!");
}
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
            to="/user"
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

        <div class="bg-slate-50 shadow-sm rounded-md py-2">
          <div class="flex flex-col">
            <div
              class="flex flex-col items-center border border-gray-500 rounded-md p-2"
            >
              <img
                class="bg-violet-500 w-3/6 md:w-1/6  rounded-md"
                src="../assets/th/bbl.svg"
                alt="bbl"
              />
              <span class="mt-1">( ไทยพาณิชย์ )</span>
              <span class="bg-gray-500 rounded-md p-1 px-6 text-white mt-2"
                >ชื่อบัญชี</span
              >
              <span class="text-lg mt-1">นิตยา ศรีวิชา</span>
              <span
                ref="AccountNumber"
                class="underline mt-1 text-blue-500 text-xl"
                >6522539557</span
              >
              <button
                @click="copyAccountNumberClick"
                class="w-full bg-blue-500 py-3 px-2 rounded-lg text-white  transition-all duration-300 flex flex-row gap-1 hover:bg-blue-600 justify-center mt-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>

                คัดลอกเลขบัญชี
              </button>

            </div>
            <div
              class="w-full bg-green-100 flex flex-row justify-start py-4 pl-5 border border-green-300 rounded-md mt-2"
            >
              <span class="text-green-700">ระบบฝากเงินออโต้</span>
            </div>
            <div
              class="w-full bg-orange-100 flex flex-row justify-start py-4 pl-5 border border-orange-300 rounded-md mt-2"
            >
              <span class="text-orange-700"
                >คำเตือน ! กรุณาใช้บัญชีที่ท่านผูกกับ
                อั้นน้อยในการโอนเงินเท่านั้น</span
              >
            </div>
            <div
              class="w-full bg-red-100 flex flex-row justify-start py-4 pl-5 border border-red-300 rounded-md mt-2"
            >
              <span class="text-red-700"
                >เลี่ยงการโอนเงินช่วงระหว่างเวลา 23.00 - 00.30 น.
                ***อาจได้รับเครดิตล่าช้า*** <br />ยอดจะปรับภายใน 1 ช.ม</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <StickyBottom />
  </div>
</template>
